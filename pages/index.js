import React, { useState } from "react";
import Head from "next/head";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

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
      </Head>
      <main className=" font-sans ">
        <Navbar post={posts[0]}></Navbar>
        <Hero post={posts[0]}></Hero>
        <Banner post={posts[0]} text={posts[0].banners.bannerOne}></Banner>
        <IntroImgLeftSide post={posts[0]}></IntroImgLeftSide>
        <IntroImgRightSide post={posts[0]}></IntroImgRightSide>
        <Banner post={posts[0]} text={posts[0].banners.bannerTwo}></Banner>
        <InfoSectionOne post={posts[0]}></InfoSectionOne>
        <InfoSectionTwo post={posts[0]}></InfoSectionTwo>
        <InfoSectionThree post={posts[0]}></InfoSectionThree>
      </main>
      <Footer post={posts[0]}></Footer>;
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
