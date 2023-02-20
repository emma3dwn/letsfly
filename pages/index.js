import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import IntroImgLeftSide from "../components/IntroImgLeftSide";
import IntroImgRightSide from "../components/IntroImgRightSide";
import InfoSectionOne from "../components/InfoSectionOne";
import InfoSectionTwo from "../components/InfoSectionTwo";
import InfoSectionThree from "../components/InfoSectionThree";

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Let's Fly</title>
        <meta name="description" content="Let's fly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="z-30 fixed">
          {posts.map((post, index) => {
            return <Navbar key={`navbar${index}`} post={post}></Navbar>;
          })}
        </div>

        <div>
          {posts.map((post, index) => {
            return <Hero key={`hero${index}`} post={post}></Hero>;
          })}
        </div>

        <div className="bannerOne">
          {posts.map((post, index) => {
            return (
              <Banner
                key={`banner1${index}`}
                post={post}
                text={post.banners.bannerOne}
              ></Banner>
            );
          })}
        </div>

        <div className="introImgLeftSide">
          {posts.map((post, index) => {
            return (
              <IntroImgLeftSide
                key={`introleft${index}`}
                post={post}
              ></IntroImgLeftSide>
            );
          })}
        </div>

        <div className="introImgRightSide">
          {posts.map((post, index) => {
            return (
              <IntroImgRightSide
                key={`introright${index}`}
                post={post}
              ></IntroImgRightSide>
            );
          })}
        </div>

        <div className="bannerTwo">
          {posts.map((post, index) => {
            return (
              <Banner
                key={`banner2${index}`}
                post={post}
                text={post.banners.bannerTwo}
              ></Banner>
            );
          })}
        </div>

        <div className="infoSectionOne">
          {posts.map((post, index) => {
            return (
              <InfoSectionOne
                key={`sectionone${index}`}
                post={post}
              ></InfoSectionOne>
            );
          })}
        </div>

        <div className="infoSectionTwo">
          {posts.map((post, index) => {
            return (
              <InfoSectionTwo
                key={`section2${index}`}
                post={post}
              ></InfoSectionTwo>
            );
          })}
        </div>

        <div className="infoSectionThree">
          {posts.map((post, index) => {
            return (
              <InfoSectionThree
                key={`section3${index}`}
                post={post}
              ></InfoSectionThree>
            );
          })}
        </div>
      </main>

      <footer>
        <div className="footer">
          {posts.map((post, index) => {
            return <Footer key={`footer${index}`} post={post}></Footer>;
          })}
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          heroSection {
            heroBackground {
              mediaItemUrl
            }
            leftSideHeading
            leftSideParagraph
            planeIllustration {
              mediaItemUrl
            }
            rightSideHeading
            emailInput
          }
          navbar {
            logo {
              mediaItemUrl
            }
            signUpButton
            blogLink
            contactLink
            downloadAppButton
          }
          banners {
            bannerOne
            bannerTwo
          }
          introSection {
            introSectionImgOne {
              mediaItemUrl
            }
            introSectionHeadingOne
            introSectionTextOne
            introSectionImgTwo {
              mediaItemUrl
            }
            introSectionHeadingTwo
            introSectionTextTwo
          }
          infoSection {
            infoSectionImgOne {
              mediaItemUrl
            }
            infoSectionHeadingOne
            infoSectionTextOne
            infoSectionImgTwo {
              mediaItemUrl
            }
            infoSectionTextTwo
            infoSectionImgThree {
              mediaItemUrl
            }
            infoSectionThreeTextFieldOneNumber
            infoSectionThreeTextFieldOneParagraph
            infoSectionThreeTextFieldThreeNumber
            infoSectionThreeTextFieldThreeParagraph
            infoSectionThreeTextFieldTwoNumber
            infoSectionThreeTextFieldTwoParagraph
          }
          footer {
            footerLogo {
              mediaItemUrl
            }
            footerLinks {
              contactLink {
                title
                url
              }
              aboutUsLink {
                title
                url
              }
              faqLink {
                title
                url
              }
              termsLink {
                title
                url
              }
              privacyLink {
                title
                url
              }
            }
            newsletterSignUp {
              newsletterSignUpText
              newsletterSignUpEmailField
            }
            socialIcons {
              socialIconLinkedin {
                mediaItemUrl
              }
              socialIconInstagram {
                mediaItemUrl
              }
              socialIconFacebook {
                mediaItemUrl
              }
            }
            copyright
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
  });

  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}

export default Home;
