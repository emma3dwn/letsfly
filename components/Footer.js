import Link from "next/link";
import React from "react";

function Footer({ component }) {
  return (
    <footer>
      <section className="bg-full bg-black ">
        <div className="container m-auto px-6 pb-6 pt-8    md:py-10 md:px-10 text-white">
          {/* Logo */}
          <div className=" py-6">
            <Link href="/">
              <img
                className="w-56"
                src={component.footer.footerLogo.mediaItemUrl}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex flex-col items-left gap-2 md:hidden ">
            <Link href="#">
              {component.footer.footerLinks.contactLink.title}
            </Link>
            <Link href="#">
              {component.footer.footerLinks.aboutUsLink.title}
            </Link>
            <Link href="#">{component.footer.footerLinks.faqLink.title}</Link>

            <div className=" p-2 w-full  text-center">
              <p>{component.footer.newsletterSignUp.newsletterSignUpText}</p>

              <div className="row-span-2 h-16 flex items-center justify-center ">
                <div className="w-5/6   py-2 px-4 rounded-full border-none hover:border-solid-2 border-white  bg-white flex  lg:w-1/2">
                  <input
                    type="email"
                    className="w-full bg-white border-none focus:outline-none placeholder-black text-black"
                    placeholder="Enter your email"
                  />

                  <button
                    className="border-none focus:outline-none"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 fill-black"
                    >
                      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex justify-center	gap-4 my-2">
                <img
                  className="w-6"
                  src={
                    component.footer.socialIcons.socialIconLinkedin.mediaItemUrl
                  }
                  alt="Linked in"
                />
                <img
                  className="w-6"
                  src={
                    component.footer.socialIcons.socialIconInstagram
                      .mediaItemUrl
                  }
                  alt="Instagram"
                />
                <img
                  className="w-6"
                  src={
                    component.footer.socialIcons.socialIconFacebook.mediaItemUrl
                  }
                  alt="Facebook"
                />
              </div>
            </div>

            <div className="flex justify-center	gap-4 my-2">
              <Link href="#">
                {component.footer.footerLinks.termsLink.title}
              </Link>
              <Link href="#">
                {component.footer.footerLinks.privacyLink.title}
              </Link>
            </div>
            <div className="flex justify-center	gap-4 my-2">
              <p> {component.footer.copyright} </p>
            </div>
          </div>

          {/* Ipad and larger */}
          <div className="hidden md:flex-col md:items-left md:gap-2 md:flex">
            {/* First Links */}
            <div className="grid grid-cols-2 gap-y-4 justify-start">
              {/* CONTACT ABOUT FAQ */}
              <div className="grid grid-rows-3 gap-y-2">
                <Link href="#" className="h-8">
                  {component.footer.footerLinks.contactLink.title}
                </Link>
                <Link href="#" className="h-8">
                  {component.footer.footerLinks.aboutUsLink.title}
                </Link>
                <Link href="#" className="h-8">
                  {component.footer.footerLinks.faqLink.title}
                </Link>
              </div>

              {/* SUB INPUT LINKS */}
              <div className="grid grid-rows-3 gap-y-2 ">
                <div className="  text-center h-8 justify-end">
                  {component.footer.newsletterSignUp.newsletterSignUpText}
                </div>

                <div className="row-span-2 h-16 flex items-center justify-center ">
                  <div className="w-5/6 lg:w-4/6 py-2 px-4 rounded-full border-solid border-2 border-white bg-white flex">
                    <input
                      type="email"
                      className="w-full bg-white border-none focus:outline-none text-black placeholder-black "
                      placeholder="Enter your email"
                    />

                    <button
                      className="border-none focus:outline-none"
                      type="submit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 fill-black"
                      >
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Link href="#">
                  {component.footer.footerLinks.termsLink.title}
                </Link>
                <Link href="#">
                  {component.footer.footerLinks.privacyLink.title}
                </Link>
              </div>
              <div className="flex gap-2 justify-center ">
                <div className="flex justify-center	gap-4 my-2">
                  <img
                    className="w-6"
                    src={
                      component.footer.socialIcons.socialIconLinkedin
                        .mediaItemUrl
                    }
                    alt="Linked in"
                  />
                  <img
                    className="w-6"
                    src={
                      component.footer.socialIcons.socialIconInstagram
                        .mediaItemUrl
                    }
                    alt="Instagram"
                  />
                  <img
                    className="w-6"
                    src={
                      component.footer.socialIcons.socialIconFacebook
                        .mediaItemUrl
                    }
                    alt="Facebook"
                  />
                </div>
              </div>
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
