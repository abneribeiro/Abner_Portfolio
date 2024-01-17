
import React, { useState } from "react";

function Navbar() {

  const [colorchange, setColorchange] = useState(false)
  
  React.useEffect(()=>{
    window.addEventListener('scroll',function changeNavbarColor () {
      (window.scrollY >= 100) ? setColorchange(prev => prev =  true) : setColorchange(prev => prev =  false);
    
    })
  }, [])
  
  return (
    <header className= 'header'>
      
      <nav className={colorchange ? 'navBar scroll_navBar': 'navBar'}>
  <ul className={'navMenu'}>
          <li >
            <a href="#home">Home</a>
          </li>
          <li >
            <a href="#about">About</a>
          </li>
          <li >
            <a href="#skills">Projects</a>
          </li>
          
          <li >
            <a href="#skills">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
