import React from 'react'
import styles from '../styles/banners.module.css'

function BannerTwo({  post }) {
    return (
      <section className={styles.bannerSection}>
          <div className={styles.bannerTextSection}>
            <h3 className={styles.bannerText}> {post.banners.bannerTwo} </h3>
          </div>
      </section>
    )
  }
  
  export default BannerTwo