import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-slate-900 text-center text-neutral-400 justify-end">
      <p>
        Developed by{" "}
        <a
          href="https://github.com/Abmichael01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:underline"
        >
          Urkelcodes
        </a>
      </p>
    </footer>
  );
};

export default Footer;
