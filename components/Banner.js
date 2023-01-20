import React from 'react'
import styles from '../styles/banners.module.css'

function Banner(props) {
  return (
    <section className={styles.bannerSection}>
        <div className={styles.bannerTextSection}>
            <p className={styles.bannerText}> {props.text} </p>
        </div> 
    </section>
  )
} 

export default Banner