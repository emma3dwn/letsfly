import React from "react";
import Link from "next/link";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import Popup from "./Popup";

function Navbar({ post }) {
  {
    /* Navbar BG change at scroll */
  }
  const [colorChange, setColorChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      window.scrollY >= 10 ? setColorChange(true) : setColorChange(false);
    };

    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let bgColor = "bg-transparent";
  let textColor = "text-white";
  if (colorChange) {
    bgColor = "bg-black/90";
    textColor = "text-white-400";
  }
  return (
    <header className="sticky w-full top-0">
      <nav className={`w-full  ${bgColor} text-white ${textColor}`}>
        <div className="container mx-auto p-5">
          {/* NAVBAR MOBILE  */}
          <div className="sm:block  md:hidden">
            <div className="flex flex-row  gap-5 items-center">
              <Link href="/">
                <img
                  className="w-2/3 aspect-auto"
                  src={post.navbar.logo.mediaItemUrl}
                  alt="Logo"
                />
              </Link>

              <div className="flex-grow"></div>
            </div>
          </div>

          {/* NAVBAR REST  */}
          <div className=" hidden md:block">
            <div className=" flex flex-row items-center gap-3 xl:gap-5 ">
              <Link href="/">
                <img
                  className="aspect-auto  w-64"
                  src={post.navbar.logo.mediaItemUrl}
                  alt="Logo"
                />
              </Link>

              <Link
                href="#"
                className="hover:text-white/20 hover:border-white/20 "
              >
                {post.navbar.blogLink}
              </Link>

              <Link
                href="#"
                className="hover:text-white/20 hover:border-white/20 "
              >
                {post.navbar.contactLink}
              </Link>

              <div className="flex-grow"></div>

              <Popup post={post} inNav={true} />

              <Button>{post.navbar.downloadAppButton}</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

/*

return (
    <header>
      <nav className=" flex flex-row">
        {/* NAVBAR DESKTOP LEFT SIDE }
        <div className={styles.leftSideNavbar}>
          <Link href="/">
            <Image
              className={styles.navbarLogo}
              src={post.navbar.logo.mediaItemUrl}
              alt="Logo"

              width={350}
              height={50}

              quality={75}
            />
          </Link>
          <Link href="#" className={styles.navLinks} onClick={toggleMenu}>
            {post.navbar.blogLink}
          </Link>
          <Link href="#" className={styles.navLinks} onClick={toggleMenu}>
            {post.navbar.contactLink}
          </Link>
        </div>

        <div className="grow"></div>
        {/* NAVBAR DESKTOP RIGHT SIDE }
        <div className={styles.rightSideNavbar}>
          <Popup post={post} inNav={true} />
          <Button
            key={post.id}
            post={post}
            text={post.navbar.downloadAppButton}
          ></Button>
        </div>

        {/* MOBILE TOGGLE MENU }
        {/* Hamburger Toggle }
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation Links }
        {isOpen && (
          <div className="flex flex-row">
            <Link
              href="#"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              {post.navbar.blogLink}
            </Link>
            <Link
              href="#"
              className={styles.mobileNavLink}
              onClick={toggleMenu}
            >
              {post.navbar.contactLink}
            </Link>
            <Popup post={post} inNav={true} inMobileNav={true} />
            <Button
              key={post.id}
              post={post}
              text={post.navbar.downloadAppButton}
              inMobileNav={true}
            ></Button>
          </div>
        )}
      </nav>
    </header>
  ); */

/*<Button>
  <div className="" onClick={toggleMenu}>
    {isOpen ? <FaTimes /> : <FaBars />}
  </div>
  {isOpen && (
    <div className="flex flex-row">
      <Link href="#" className="" onClick={toggleMenu}>
        {post.navbar.blogLink}
      </Link>
      <Link href="#" className="" onClick={toggleMenu}>
        {post.navbar.contactLink}
      </Link>
      <Popup post={post} inNav={true} inMobileNav={true} />
      <Button
        key={post.id}
        post={post}
        text={post.navbar.downloadAppButton}
        inMobileNav={true}
      ></Button>
    </div>
  )}
</Button> 
*/
