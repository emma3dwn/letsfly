import React, { useState } from 'react';
import Head from 'next/head';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

import api from '../api/api';

import Popup from '../components/Popup';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import IntroImgLeftSide from '../components/IntroImgLeftSide';
import IntroImgRightSide from '../components/IntroImgRightSide';
import InfoSectionOne from '../components/InfoSectionOne';
import InfoSectionTwo from '../components/InfoSectionTwo';
import InfoSectionThree from '../components/InfoSectionThree';

function Home({ posts }) {
  return (
    <div className="homeContainer">
      <div className="popup">
        {posts.map((post) => {
          return <Popup key={post.id} post={post}></Popup>;
        })}
      </div>

      <Head>
        <title>Let's Fly</title>
        <meta name="description" content="Let's fly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="navbar">
          {posts.map((post) => {
            return (
            <Navbar key={post.id} post={post}></Navbar>
            );
          })}
        </div>

        <div className="hero">
          {posts.map((post) => {
            return (
            <Hero key={post.id} post={post}></Hero>
            );
          })}
        </div>

        <div className="bannerOne">
          {posts.map((post) => {
            return (
              <Banner
                key={post.id}
                post={post}
                text={post.banners.bannerOne}
              ></Banner>
            );
          })}
        </div>

        <div className="introImgLeftSide">
          {posts.map((post) => {
            return (
              <IntroImgLeftSide key={post.id} post={post}></IntroImgLeftSide>
            );
          })}
        </div>

        <div className="introImgRightSide">
          {posts.map((post) => {
            return (
              <IntroImgRightSide key={post.id} post={post}></IntroImgRightSide>
            );
          })}
        </div>

        <div className="bannerTwo">
          {posts.map((post) => {
            return (
              <Banner
                key={post.id}
                post={post}
                text={post.banners.bannerTwo}
              ></Banner>
            );
          })}
        </div>

        <div className="infoSectionOne">
          {posts.map((post) => {
            return (
              <InfoSectionOne key={post.id} post={post}></InfoSectionOne>
            );
          })}
        </div>

        <div className="infoSectionTwo">
          {posts.map((post) => {
            return (
              <InfoSectionTwo key={post.id} post={post}></InfoSectionTwo>
            );
          })}
        </div>

        <div className="infoSectionThree">
          {posts.map((post) => {
            return (
              <InfoSectionThree key={post.id} post={post}></InfoSectionThree>
            );
          })}
        </div>
      </main>

      <footer>
        <div className="footer">
          {posts.map((post) => {
            return (
              <Footer key={post.id} post={post}></Footer>
            );
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
