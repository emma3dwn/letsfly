import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import Popup from "./Popup";
const styles = {};

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
    <header>
      <nav className={`fixed top-0 w-full ${bgColor} text-white ${textColor}`}>
        {/* NAVBAR MOBILE  */}
        <div className="sm:block md:block lg:hidden">
          <div className="flex flex-row gap-2 p-4 items-center">
            <Link href="/">
              <Image
                className="aspect-auto w-full"
                src={post.navbar.logo.mediaItemUrl}
                alt="Logo"
                width={175}
                height={25}
                quality={75}
              />
            </Link>

            <div className="flex-grow"></div>
            <Button>=</Button>
          </div>
        </div>

        {/* NAVBAR REST  */}
        <div className="hidden lg:block px-16">
          <div className="flex flex-row items-center gap-8 p-4 ">
            <Link href="/">
              <Image
                className="aspect-auto w-full"
                src={post.navbar.logo.mediaItemUrl}
                alt="Logo"
                width={233}
                height={33}
                quality={75}
              />
            </Link>

            <Link href="#" className="">
              {post.navbar.blogLink}
            </Link>

            <Link href="#" className="">
              {post.navbar.contactLink}
            </Link>

            <div className="flex-grow"></div>

            <Popup post={post} inNav={true} />

            <Button>{post.navbar.downloadAppButton}</Button>
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
