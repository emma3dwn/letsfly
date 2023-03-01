import Link from "next/link";
import React from "react";

import Image from "next/image";

import Popup from "./Popup";

function Footer({ post }) {
  return (
    <footer>
      <section className="bg-full bg-black ">
        <div className="container m-auto p-8 text-white">
          {/* Logo */}
          <div className="">
            <Link href="/">
              <img
                className="w-56"
                src={post.footer.footerLogo.mediaItemUrl}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="flex flex-col items-left gap-2 md:flex-row">
            {/* LEFT SIDE */}

            {/* First Links */}

            <Link href="#">{post.footer.footerLinks.contactLink.title}</Link>
            <Link href="#">{post.footer.footerLinks.aboutUsLink.title}</Link>
            <Link href="#">{post.footer.footerLinks.faqLink.title}</Link>

            {/* Second Links */}

            {/* RIGHT SIDE */}
            <div className=" p-2 w-full md:w-1/2 text-center md:text-right">
              <p>{post.footer.newsletterSignUp.newsletterSignUpText}</p>

              <div className="flex justify-center	gap-4 my-2">
                <img
                  className="w-6"
                  src={post.footer.socialIcons.socialIconLinkedin.mediaItemUrl}
                  alt="Linked in"
                />
                <img
                  className="w-6"
                  src={post.footer.socialIcons.socialIconInstagram.mediaItemUrl}
                  alt="Instagram"
                />
                <img
                  className="w-6"
                  src={post.footer.socialIcons.socialIconFacebook.mediaItemUrl}
                  alt="Facebook"
                />
              </div>
            </div>
            <div className="flex justify-center	gap-4 my-2">
              <Link href="#">{post.footer.footerLinks.termsLink.title}</Link>
              <Link href="#">{post.footer.footerLinks.privacyLink.title}</Link>
            </div>
            <div className="flex justify-center	gap-4 my-2">
              <p> {post.footer.copyright} </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
