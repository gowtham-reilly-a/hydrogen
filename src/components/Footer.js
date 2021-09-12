import React from "react";

export default function Footer() {
  return (
    <footer className="absolute w-full h-8 bottom-0 left-0 bg-skin-base text-skin-base flex items-center px-6">
      <a
        href="https://gowthamreilly.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-skin-accent"
      >
        &copy; Hydrogen built by Gowtham Reilly
      </a>
    </footer>
  );
}
