import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link href="/">Jesal</Link>
      </div>
      <a href="./Jesal.pdf" target="_blank" className="cta-btn">
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
