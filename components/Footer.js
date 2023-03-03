import Link from "next/link";
import React from "react";

import Image from "next/image";

import Popup from "./Popup";

function Footer({ component }) {
  return (
    <footer>
      <section className="bg-full bg-black ">
        <div className="container m-auto p-8 text-white">
          {/* Logo */}
          <div className="">
            <Link href="/">
              <img
                className="w-56"
                src={component.footer.footerLogo.mediaItemUrl}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="flex flex-col items-left gap-2 md:flex-row">
            {/* LEFT SIDE */}

            {/* First Links */}

            <Link href="#">{component.footer.footerLinks.contactLink.title}</Link>
            <Link href="#">{component.footer.footerLinks.aboutUsLink.title}</Link>
            <Link href="#">{component.footer.footerLinks.faqLink.title}</Link>

            {/* Second Links */}

            {/* RIGHT SIDE */}
            <div className=" p-2 w-full md:w-1/2 text-center md:text-right">
              <p>{component.footer.newsletterSignUp.newsletterSignUpText}</p>

              <div className="flex justify-center	gap-4 my-2">
                <img
                  className="w-6"
                  src={component.footer.socialIcons.socialIconLinkedin.mediaItemUrl}
                  alt="Linked in"
                />
                <img
                  className="w-6"
                  src={component.footer.socialIcons.socialIconInstagram.mediaItemUrl}
                  alt="Instagram"
                />
                <img
                  className="w-6"
                  src={component.footer.socialIcons.socialIconFacebook.mediaItemUrl}
                  alt="Facebook"
                />
              </div>
            </div>
            <div className="flex justify-center	gap-4 my-2">
              <Link href="#">{component.footer.footerLinks.termsLink.title}</Link>
              <Link href="#">{component.footer.footerLinks.privacyLink.title}</Link>
            </div>
            <div className="flex justify-center	gap-4 my-2">
              <p> {component.footer.copyright} </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
