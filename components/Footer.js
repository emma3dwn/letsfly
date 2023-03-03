import Link from "next/link";
import React from "react";

function Footer({ post }) {
  return (
    <footer>
      <section className="bg-full bg-black ">
        <div className="container m-auto px-6 pb-6 pt-8    md:pb-32 md:pt-10 md:px-10 text-white">
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

          {/* Mobile */}
          <div className="flex flex-col items-left gap-2 md:hidden ">
            <Link href="#">{post.footer.footerLinks.contactLink.title}</Link>
            <Link href="#">{post.footer.footerLinks.aboutUsLink.title}</Link>
            <Link href="#">{post.footer.footerLinks.faqLink.title}</Link>

            <div className=" p-2 w-full  text-center">
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
          {/* Ipad and larger */}
          <div className="flex-col items-left gap-2 sm:hidden md:flex">
            {/* First Links */}
            <div className="grid grid-cols-2">
              <div className="flex gap-2">
                <Link href="#">
                  {post.footer.footerLinks.contactLink.title}
                </Link>
                <Link href="#">
                  {post.footer.footerLinks.aboutUsLink.title}
                </Link>
                <Link href="#">{post.footer.footerLinks.faqLink.title}</Link>
              </div>

              <div className="text-center">
                <p>{post.footer.newsletterSignUp.newsletterSignUpText}</p>
                <input type="text" />
              </div>

              <div className="flex gap-2">
                <Link href="#">{post.footer.footerLinks.termsLink.title}</Link>
                <Link href="#">
                  {post.footer.footerLinks.privacyLink.title}
                </Link>
              </div>
              <div>
                <div className="flex justify-center	gap-4 my-2">
                  <img
                    className="w-6"
                    src={
                      post.footer.socialIcons.socialIconLinkedin.mediaItemUrl
                    }
                    alt="Linked in"
                  />
                  <img
                    className="w-6"
                    src={
                      post.footer.socialIcons.socialIconInstagram.mediaItemUrl
                    }
                    alt="Instagram"
                  />
                  <img
                    className="w-6"
                    src={
                      post.footer.socialIcons.socialIconFacebook.mediaItemUrl
                    }
                    alt="Facebook"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center	gap-4 my-2"></div>
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
