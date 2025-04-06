"use client";
import { cn } from "@/lib/utils";

import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { SVGProps, useRef, useState } from "react";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { Content, LinkField } from "@prismicio/client";
import Brand from "@/app/components/ui/Brand";

type NavbarVariant = "primary" | "secondary" | "dark" | "gradient";
export function IconMenu2(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>{/* Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE */}<path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></path></svg>
    )
}


export function IconX(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}>{/* Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE */}<path fill="currentColor" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></path></svg>
    )
}

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: Content.SettingsDocument;
    className?: string;
    isService?: boolean;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
            className={cn("fixed inset-x-0 top-0 z-60 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "40%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "tween",
                ease: [0.25, 0.1, 0.25, 1],
                duration: 0.3,
            }}
            style={{
                minWidth: "800px",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
                visible && "bg-white/80 dark:bg-neutral-950/80",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, isService }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium not-dark:text-background  transition-all duration-200  lg:flex lg:space-x-2",
                className,
            )}
        >
            {items.data.company.map((item, idx) => (
                <PrismicNextLink
                    onMouseEnter={() => setHovered(idx)}
                    field={item.link_to_company}
                    className="relative px-4 py-2 "
                    key={`link-${idx}`}

                >
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-none  bg-gray-800 "
                        />
                    )}
                    <span className="relative z-20">{item.label}</span>
                </PrismicNextLink>
            ))}
            {isService &&
                items.data.our_services.map((item, idx) => (
                    <PrismicNextLink
                        onMouseEnter={() => setHovered(idx)}
                        field={item.link_to_services}
                        className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
                        key={`link-${idx}`}
                    >
                        {hovered === idx && (
                            <motion.div
                                layoutId="hovered"
                                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                            />
                        )}
                        <span className="relative z-20">{item.label}</span>
                    </PrismicNextLink>
                ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "4px" : "2rem",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "tween",
                ease: [0.25, 0.1, 0.25, 1],
                duration: 0.3,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
                visible && "bg-white/80 dark:bg-neutral-950/80",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return isOpen ? (
        <IconX className="text-black text-3xl dark:text-white" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-black text-3xl dark:text-white" onClick={onClick} />
    );
};

const SHADOW_STYLES = "shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]";


export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: NavbarVariant;
} & React.ComponentPropsWithoutRef<"a"> & React.ComponentPropsWithoutRef<"button">) => {
  const baseStyles = "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";
  
  const variantStyles = {
    primary: "bg-white text-black " + SHADOW_STYLES,
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white " + SHADOW_STYLES,
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
