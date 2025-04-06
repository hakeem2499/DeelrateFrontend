"use client";

import { useState } from "react";
import { Navbar, NavBody, NavItems, NavbarButton, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "./resizable-navbar";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Brand from "@/app/components/ui/Brand";



export function NavbarSubmissionPages({ navItems } : {navItems: Content.SettingsDocument }) {
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Brand scale={0.7} />
          <NavItems items={navItems} />
          
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Brand scale={0.7} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.data.company.map((item, idx) => (
              <PrismicNextLink
                key={`mobile-link-${idx}`}
                field={item.link_to_company}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.label}</span>
              </PrismicNextLink>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Join our Team
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      

      
  );
}

