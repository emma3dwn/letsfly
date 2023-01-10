import React from 'react'
import styles from '../styles/banners.module.css'

function BannerOne({ post }) {
  return (
    <section className={styles.bannerSection}>
        <div className={styles.bannerTextSection}>
            <h3 className={styles.bannerText}> {post.banners.bannerOne} </h3>
        </div>
    </section>
  )
}

export default BannerOne