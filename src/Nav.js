import React, { useEffect, useState } from 'react'
import './Nav.css'
import NetflixLogo from './NetflixLogo.png'
import NetflixAvatar from './NetflixAvatar.png'
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo'
        src= {NetflixLogo}
        alt="Netflix Logo"
        />
        <img className='nav_avatar'
        src={NetflixAvatar}
        alt=""
        />
    </div>
  )
}

export default Nav