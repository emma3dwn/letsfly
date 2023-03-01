import React, { useState } from 'react';
import Head from 'next/head';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

/* import api from "../api/api"; */

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
    <div>
      <Head>
        <title>Let's Fly</title>
      </Head>

      <main>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <div className="navbar">
                <Navbar post={post}></Navbar>
              </div>

              <div className="hero">
                <Hero post={post}></Hero>
              </div>

              <div className="bannerOne">
                <Banner post={post} text={post.banners.bannerOne}></Banner>
              </div>

              <div className="introImgLeftSide">
                <IntroImgLeftSide post={post}></IntroImgLeftSide>
              </div>

              <div className="introImgRightSide">
                <IntroImgRightSide post={post}></IntroImgRightSide>
              </div>

              <div className="bannerTwo">
                <Banner post={post} text={post.banners.bannerTwo}></Banner>
              </div>

              <div className="infoSectionOne">
                <InfoSectionOne key={post.id} post={post}></InfoSectionOne>
              </div>

              <div className="infoSectionTwo">
                <InfoSectionTwo key={post.id} post={post}></InfoSectionTwo>
              </div>

              <div className="infoSectionThree">
                <InfoSectionThree key={post.id} post={post}></InfoSectionThree>
              </div>

            </div>
          );
        })}
      </main>

      <footer>
        <div className="footer">
          {posts.map((post) => {
            return <Footer key={post.id} post={post}></Footer>;
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
            infoSectionThreeTextFieldOneParagraph
            infoSectionThreeTextFieldThreeParagraph
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
