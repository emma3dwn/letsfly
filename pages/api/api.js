import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

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