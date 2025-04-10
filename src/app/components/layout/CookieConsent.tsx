"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { getClientCookie, getServerCookie, setClientCookie, setServerCookie } from "@/lib/cookie";


interface CookieConsentProps {
    variant?: "default" | "small";
    demo?: boolean;
    onAcceptCallback?: () => void;
    onDeclineCallback?: () => void;
}

export default function CookieConsent({
    variant = "default",
    demo = false,
    onAcceptCallback = () => { },
    onDeclineCallback = () => { },
}: CookieConsentProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const handleAccept = useCallback(() => {
        setIsOpen(false);
        if (typeof window === "undefined") {
            setServerCookie("cookieConsent", "true", {
                expires: new Date("Fri, 31 Dec 9999 23:59:59 GMT"),
            });
        } else {
            setClientCookie("cookieConsent", "true", {
                expires: new Date("Fri, 31 Dec 9999 23:59:59 GMT"),
            });
        }
        setTimeout(() => setHide(true), 700);
        onAcceptCallback();
    }, [onAcceptCallback]);

    const handleDecline = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => setHide(true), 700);
        onDeclineCallback();
    }, [onDeclineCallback]);

    useEffect(() => {
        const checkCookie = () => {
            try {
                let cookieValue: string | undefined;
                if (typeof window === "undefined") {
                    cookieValue = getServerCookie("cookieConsent");
                } else {
                    cookieValue = getClientCookie("cookieConsent");
                }

                setIsOpen(!cookieValue || cookieValue !== "true");
                if (!demo && cookieValue === "true") {
                    setIsOpen(false);
                    setTimeout(() => setHide(true), 700);
                }
            } catch (e) {
                console.error("Error checking cookie:", e);
            }
        };

        checkCookie();
    }, [demo]);

    const renderContent = () => {
        if (variant === "small") {
            return (
                <div className={cn(
                    "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
                    !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100",
                    hide && "hidden"
                )}>
                    <div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
                        <div className="flex items-center justify-between p-3">
                            <h1 className="text-lg font-medium">We use cookies</h1>
                            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                        </div>
                        <div className="p-3 -mt-2">
                            <p className="text-sm text-left text-muted-foreground">
                                We use cookies to ensure you get the best experience on our website. For more information, see our cookie policy.
                            </p>
                        </div>
                        <div className="p-3 flex flex-col items-center gap-2 mt-2 border-t">
                            <Button onClick={handleAccept} className="w-fit h-9 rounded-full">Accept</Button>
                            <Button onClick={handleDecline} className="w-fit h-9 rounded-full" variant="outline">Decline</Button>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className={cn(
                "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
                !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100",
                hide && "hidden"
            )}>
                <div className="dark:bg-black bg-background rounded-none m-3 border border-border shadow-lg">
                    <div className="grid gap-2">
                        <div className="border-b border-border h-14 flex items-center justify-between p-4">
                            <h1 className="text-lg font-medium">We use cookies</h1>
                            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                        </div>
                        <div className="p-4">
                            <p className="text-sm font-normal text-start">
                                We use cookies to ensure you get the best experience on our website. For more information, see our cookie policy.
                                <br />
                                <br />
                                <span className="text-xs">By clicking "<span className="font-medium opacity-80">Accept</span>", you agree to our use of cookies.</span>
                                <br />
                                <a href="/cookie-policy" className="text-xs underline">Learn more.</a>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 p-4 py-5 border-t  border-border dark:bg-background/20">
                            <Button onClick={handleAccept} className="w-full rounded-none">Accept</Button>
                            <Button onClick={handleDecline} className="w-full rounded-none" variant="secondary">Decline</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return renderContent();
}