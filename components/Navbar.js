import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar() {
  {/* 
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  function toggleMenu(isActiveMobile, isOpen) {
    setIsActiveMobile(!isActiveMobile);
    setIsOpen(!isOpen);
  } 
  */}

  return (
    <div className={styles.navbarDesktopWrapper}>
      
      {/* NAVBAR DESKTOP LEFT SIDE */}
      <div className={styles.logoWrapper}>
        <Link href='/'>
        <Image
          className={styles.logoImage}
          width={250}
          height={54}
          src="/../public/assets/logo.png"
          alt="LET'S FLY"
        />
        </Link>
      </div>
      <div className={styles.leftSideNavbar}>
        <Link href='/'>
          Home
        </Link>
        <Link href='/app'>
          App
        </Link>
        <Link href='/contact'>
          Contact
        </Link>
      </div>

      {/* NAVBAR DESKTOP RIGHT SIDE */}
      <div className={styles.rightSideNavbar}>
      <Link href='#'>
          Sign up
        </Link>
        <Link href='#'>
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default Navbar