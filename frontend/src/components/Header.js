import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import styles from '../styles/Header.module.css'
import React from 'react';

const Header = () => {
  const { activeLinkId } = useContext(NavContext);

  const navLinks = ["Home", "Services", "About", "Prices", "Contact"];


  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
    }

    return (
      <ul key={content}>
        <li>
          <button
            onClick={handleClickNav}
            className={activeLinkId === content ? styles.activeClass : ""}
          >{content}</button>
        </li>
      </ul>
    )
  }

  return (
    <div className={styles.logoContainer}>
          <img src="./LOGO2.png" alt="Your Logo" />
         
        <div className={styles.NavBar}>
        <div className={styles.container}>
        <div className={styles.navContainer}>
          
          <nav>
            {navLinks.map(nav => renderNavLink(nav))}
          </nav>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header