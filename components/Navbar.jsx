import React, { useState, useEffect } from 'react'

import styles from '../styles/Navbar.module.css'

import Image from 'next/dist/client/image'
import Link from 'next/link'

import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMenu, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaInstagram, FaYoutube, IconName } from "react-icons/fa";

const Navbar = () => {
    // Nav Toggle
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    // Change Nav Color
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 120){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    
    //Define window on NextJs
    useEffect(() => {
        window.addEventListener('scroll', changeColor)
      }, []);
   
  return (
    
    <div className={color ? `${styles.navigation} ${styles.navigationBg}` : styles.navigation}>
        
        <div className={styles.nav }>
            <Image 
            src='/../public/assets/logo-rotten-pork-white.png'
            alt='/'
            width={118.75}
            height={85.5}
            />
            <div>
                <ul className={styles.list}>
                    <Link href='/'>
                        <li className={styles.listItem}>Inicio</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.listItem}>Biografía</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.listItem}>Discografía</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.listItem}>Contacto</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className={styles.hamburguer}>
                    <AiOutlineMenu />
                </div>
            </div>
        </div>
            <div className={nav ? styles.sidebarExpanded : styles.sidebar}>
                <div>
                    <div className={styles.sidebarHead}>
                        <div onClick={handleNav}>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className={styles.sidebarLogo}>
                    <Image 
                        src='/../public/assets/logo-rotten-pork-red.png' 
                        alt='/'
                        width={230}
                        height={165.6}
                        />
                    </div>
                </div>
                <div>
                <ul className={styles.sideBarList}>
                    <Link href='/'>
                        <li className={styles.sideListItem}>Inicio</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.sideListItem}>Biografía</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.sideListItem}>Discografía</li>
                    </Link>
                    <Link href='/'>
                        <li className={styles.sideListItem}>Contacto</li>
                    </Link>
                </ul>
                <div className={styles.sideFooter}>
                    <p className={styles.cta}>Síguenos</p>
                    <div className={styles.socialItems}>
                        <div>
                            <FaFacebookF />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                        <div>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
    </div>
  )
}

export default Navbar