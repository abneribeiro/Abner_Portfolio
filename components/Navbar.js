


import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import React, { useState } from "react";
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="header">
      <nav className="navBar">
        <h4 className="logo">.Ab</h4>
        <button className="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose
              style={{ color: "#ffff", width: "30px", height: "30px" }}
            />
          ) : (
            <FiMenu style={{ color: "#ffff", width: "30px", height: "30px" }} />
          )}
        </button>
         
         <ul className={`navMenu ${navbarOpen ? " showMenu" : ""}`}>
          <li onClick={() => closeMenu()}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => closeMenu()}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => closeMenu()}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => closeMenu()}>
            <a href="#project">Project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
