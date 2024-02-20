import React,{useState} from 'react';

import styles from "./Navbar.module.css";

import {getImageUrl} from "../../utils";

// const [menuOpen, setMenuOpen] = useState(flase);

export const Navbar = () => {
  return (
  <nav className={styles.navbar}>
  <a className={styles.title} href="/">
  <p>A<sup>2</sup>  Internship</p>
    </a>
    <div className={styles.menu}>
        <img 
        className={styles.menuBtn} 
        src={getImageUrl("nav/menuIcon.png")}
        // alt="menu-button"
        />
        <ul className={styles.menuItems}> 
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#services'>Services</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  </nav>
  )
}
