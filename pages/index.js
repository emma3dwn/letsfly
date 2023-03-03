import React, { useState } from 'react';
import Head from 'next/head';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client/core';

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

function Home({ nodeByUri }) {
  return (
    <div>
      <Head>
        <title>Let's Fly</title>
      </Head>

      <main>
        {nodeByUri && (
          <>
            <div className="navbar">
              <Navbar component={nodeByUri}></Navbar>
            </div>

            <div className="hero">
              <Hero component={nodeByUri}></Hero>
            </div>

            <div className="bannerOne">
              <Banner
                component={nodeByUri}
                text={nodeByUri.banners.bannerOne}
              ></Banner>
            </div>

            <div className="introImgLeftSide">
              <IntroImgLeftSide component={nodeByUri}></IntroImgLeftSide>
            </div>

            <div className="introImgRightSide">
              <IntroImgRightSide component={nodeByUri}></IntroImgRightSide>
            </div>

            <div className="bannerTwo">
              <Banner
                component={nodeByUri}
                text={nodeByUri.banners.bannerTwo}
              ></Banner>
            </div>

            <div className="infoSectionOne">
              <InfoSectionOne
                key={nodeByUri.id}
                component={nodeByUri}
              ></InfoSectionOne>
            </div>

            <div className="infoSectionTwo">
              <InfoSectionTwo
                key={nodeByUri.id}
                component={nodeByUri}
              ></InfoSectionTwo>
            </div>

            <div className="infoSectionThree">
              <InfoSectionThree
                key={nodeByUri.id}
                component={nodeByUri}
              ></InfoSectionThree>
            </div>
          </>
        )}
      </main>

      <footer>
        <div className="footer">
          {nodeByUri && <Footer component={nodeByUri}></Footer>}
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const GET_FRONTPAGE = gql`
    query PageQuery {
      nodeByUri(uri: "/") {
        __typename
        ... on ContentType {
          id
          name
        }
        ... on Page {
          id
          title
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
    query: GET_FRONTPAGE,
  });

  const nodeByUri = response?.data?.nodeByUri;
  return {
    props: {
      nodeByUri,
    },
  };
}

export default Home;
