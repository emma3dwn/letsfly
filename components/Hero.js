import React from 'react'


export async function getStaticProps(){

  const res = await fetch ('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query NewQuery {
          posts {
            nodes {
              slug
              content
            }
          }
        }
      `,
    })
  })

  const json = await res.json()

  return {
    props: {
      posts: json.data.posts,
    },
  }
}

function Hero( {posts} ) {

  console.log({posts});

  return (
    <div className='heroSection'>

      {/* Hero-video */}
      <div className='heroVideo'>
        {/* Get video with API from wordpress CMS */}
      </div>
 
      {/* Hero-text left side */}
      <div className='heroContainerLeft'>
        <div className='leftSideHeadingContainer'>
          <h1 className='leftSideHeading'> About to take off! </h1>
        </div>
        <div className='leftSideTextContainer'>
          <p className='leftSideParagraph'>Sign up now to our pre-download list and be part of the select few to experience our next gen air travel </p>
        </div>
        <div className='leftSideIllustrationContainer'>
          {/* Flying plane illustration */}
        </div>
      </div>

      {/* Hero-text right side */}
      <div className='heroContainerRight'>
        <div className='rightSideHeadingContainer'>
          <h2 className='rightSideHeading'> Sign me up now!</h2>
        </div>
        <div className='rightSideEmailInput'>
          {/* Email input field */}
        </div>
      </div>
    </div>
  )
}

export default Hero