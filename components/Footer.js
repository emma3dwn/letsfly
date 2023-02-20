import Link from "next/link";
import React from "react";

import Button from "./Button";
import Popup from "./Popup";
import Image from "next/image";

function Footer({ post }) {
  return (
    <>
      <section>
        {/* LEFT SIDE */}
        <div>
          {/* Logo */}
          <Link href="/">
            <Image
              src={post.footer.footerLogo.mediaItemUrl}
              alt="Logo"
              width={355}
              height={55}
              quality={75}
            />
          </Link>

          {/* First Links */}
          <div>
            <Link href="#">{post.footer.footerLinks.contactLink.title}</Link>
            <Link href="#">{post.footer.footerLinks.aboutUsLink.title}</Link>
            <Link href="#">{post.footer.footerLinks.faqLink.title}</Link>
          </div>

          {/* Second Links */}
          <div>
            <Link href="#">{post.footer.footerLinks.termsLink.title}</Link>
            <Link href="#">{post.footer.footerLinks.privacyLink.title}</Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p>{post.footer.newsletterSignUp.newsletterSignUpText}</p>
          <Popup post={post} />
          <div>
            <Image
              src={post.footer.socialIcons.socialIconLinkedin.mediaItemUrl}
              alt="Linked in"
              width={100}
              height={100}
              quality={75}
            />
            <Image
              src={post.footer.socialIcons.socialIconInstagram.mediaItemUrl}
              alt="Instagram"
              width={100}
              height={100}
            />
            <Image
              src={post.footer.socialIcons.socialIconFacebook.mediaItemUrl}
              alt="Facebook"
              width={100}
              height={100}
              quality={75}
            />
          </div>
        </div>
      </section>

      {/* FOOTER BOTTOM/COPYRIGHT */}
      <div>
        {/* Second Links Mobile */}
        <div>
          <Link href="#">{post.footer.footerLinks.termsLink.title}</Link>
          <Link href="#">{post.footer.footerLinks.privacyLink.title}</Link>
        </div>
        <p> {post.footer.copyright} </p>
      </div>
    </>
  );
}

export default Footer;
