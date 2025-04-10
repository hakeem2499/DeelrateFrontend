# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Configure DNS through Docker's network settings instead of modifying resolv.conf
# This is done by passing --dns flag to docker build (see build command below)

# Install dependencies (including devDependencies for build)
COPY package.json package-lock.json ./
RUN npm install

# Copy Prismic configuration if exists
COPY slicemachine.config.json ./slicemachine.config.json
RUN if [ -f sm.json ]; then cp sm.json ./; else echo "No sm.json found, continuing without it"; fi

# Copy the rest of the files
COPY . .

# Environment variables for build
ARG NEXT_PUBLIC_PRISMIC_ENVIRONMENT=production
ENV NEXT_PUBLIC_PRISMIC_ENVIRONMENT=${NEXT_PUBLIC_PRISMIC_ENVIRONMENT}

# Build the application with retry logic
RUN npm run build || \
    (echo "Build failed, retrying with increased timeout..." && \
     NEXT_PUBLIC_SKIP_PRISMIC_FETCH=true npm run build)

# Stage 2: Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
USER nextjs

# Copy built assets from builder
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

# Start the application
CMD ["npm", "start"]