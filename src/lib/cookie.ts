// lib/cookies.ts

import { CookieOptions } from "express"; // For type definitions only

// Default cookie options for enterprise security
export const cookieOptions: CookieOptions = {
  httpOnly: true, // Prevents JavaScript access to the cookie
  secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
  sameSite: "strict" as const, // Protects against CSRF attacks
  path: "/", // Cookie available across the entire domain
  maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
};

// Server-side cookie functions (for App Router or API routes)
export function setServerCookie(name: string, value: string, options: Partial<CookieOptions> = {}) {
  if (typeof window === "undefined") {
    // Use Next.js cookies API for server-side (App Router)
    const headers = require("next/headers");
    const cookies = headers.cookies;
    cookies.set(name, value, { ...cookieOptions, ...options });
  } else {
    throw new Error("setServerCookie should only be called on the server");
  }
}

export function getServerCookie(name: string): string | undefined {
  if (typeof window === "undefined") {
    const headers = require("next/headers");
    const cookies = headers.cookies;
    return cookies.get(name)?.value;
  } else {
    throw new Error("getServerCookie should only be called on the server");
  }
}

export function removeServerCookie(name: string) {
  if (typeof window === "undefined") {
    const headers = require("next/headers");
    const cookies = headers.cookies;
    cookies.delete(name);
  } else {
    throw new Error("removeServerCookie should only be called on the server");
  }
}

// Client-side cookie functions (for both App Router and Pages Router)
export function setClientCookie(name: string, value: string, options: Partial<CookieOptions> = {}) {
  if (typeof window !== "undefined") {
    document.cookie = `${name}=${encodeURIComponent(value)}; ${Object.entries({
      ...cookieOptions,
      ...options,
    })
      .map(([key, val]) => `${key}=${val}`)
      .join("; ")}`;
  } else {
    throw new Error("setClientCookie should only be called on the client");
  }
}

export function getClientCookie(name: string): string | undefined {
  if (typeof window !== "undefined") {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return undefined;
  } else {
    throw new Error("getClientCookie should only be called on the client");
  }
}

export function removeClientCookie(name: string) {
  if (typeof window !== "undefined") {
    document.cookie = `${name}=; Max-Age=-99999999; path=/;`;
  } else {
    throw new Error("removeClientCookie should only be called on the client");
  }
}

// Helper to determine context and choose appropriate function
export function useCookie(name: string, value?: string, options?: Partial<CookieOptions>) {
  if (typeof window === "undefined") {
    if (value) return setServerCookie(name, value, options);
    return getServerCookie(name);
  } else {
    if (value) return setClientCookie(name, value, options);
    return getClientCookie(name);
  }
}