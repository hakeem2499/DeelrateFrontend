// components/TwoLineBurgerMenu.tsx
"use client";
import clsx from "clsx";
import { useState } from "react";

export default function TwoLineBurgerMenu() {
  const [isClosed, setIsClosed] = useState(false);

  const toggleMenu = () => setIsClosed((prev) => !prev);

  return (
    <button
      className={clsx('burger-btn', isClosed ? "is-closed" : "")}
      onClick={toggleMenu}
      aria-label="Toggle navigation menu"
      aria-expanded={isClosed}
    >
      {/* No <span> needed; pseudo-elements handle the lines */}
      <span className="sr-only">{isClosed ? "Close" : "Open"} menu</span>
    </button>
  );
}