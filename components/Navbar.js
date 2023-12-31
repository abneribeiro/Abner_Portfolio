import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

import React, { useState } from "react";
import { useDarkModeContext } from "../context/darkModeContext";
function Navbar() {
  const { isDarkMode, setIsDarkMode } = useDarkModeContext()
  const [navbarOpen, setNavbarOpen] = useState(false);  
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const [colorchange, setColorchange] = useState(false)
  
  React.useEffect(()=>{
    window.addEventListener('scroll',function changeNavbarColor () {
      (window.scrollY >= 1000) ? setColorchange(prev => prev =  true) : setColorchange(prev => prev =  false);
      closeMenu()
    })
  }, [])
  
  return (
    <header className={ colorchange ? ' header scroll_header' : 'header'}>
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

        <ul className={`navMenu ${navbarOpen ? "showMenu" : ""}`}>
          <li onClick={() => closeMenu()}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => closeMenu()}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => closeMenu()}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => closeMenu()} style={ { display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '20px', marginLeft: '25px', color: '#fff' }}>
            {isDarkMode ? 
            <IoSunny onClick={() => setIsDarkMode(false)} />
            : <IoIosMoon onClick={() => setIsDarkMode(true)} />
            }
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
