import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Navbar({ post }) {
  {/* 
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  function toggleMenu(isActiveMobile, isOpen) {
    setIsActiveMobile(!isActiveMobile);
    setIsOpen(!isOpen);
  } 
  */}

  {/* Navbar BG change at scroll */}
  const [colorChange, setColorChange] = useState(false)

  useEffect(() => {
    const changeNavbarColor = () => {
      window.scrollY >= 500 ? setColorChange(true) : setColorChange(false)
    } 

    window.addEventListener('scroll', changeNavbarColor)
    return () => window.removeEventListener('scroll', changeNavbarColor)
  }, [])


  return (
        <nav className=
          {
          colorChange ? styles.navbarWrapperBg : styles.navbarWrapper
          }
        >
        {/* NAVBAR DESKTOP LEFT SIDE */}
        <div className={styles.logoWrapper}>
          <Link href='/'>
            <img className={styles.navbarLogo} src={post.navbar.logo.mediaItemUrl} alt='Logo' />
          </Link>
        </div>

        {/*
        <div className={styles.leftSideNavbar}>
          <Link href='/blog'>
            Blog
          </Link>
          <Link href='/contact'>
            Contact
          </Link>
        </div> 
        */}
      
        {/* NAVBAR DESKTOP RIGHT SIDE */}
        <div className={styles.rightSideNavbar}>
          <Link href='#' className={styles.signUpBtn}>
            {post.navbar.signUpButton}
          </Link>
          <Link href='#' className={styles.signInBtn}>
            {post.navbar.signInButton}
          </Link>
        </div>
    </nav>
  )
}

export default Navbar