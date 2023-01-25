import React from 'react'
import styles from '../styles/banners.module.css'

function Banner(props) {
  return (
    <section className={styles.bannerSection}>
        <div className={styles.bannerTextSection}>
            <h3 className={styles.bannerText}> {props.text} </h3>
        </div>  
    </section>
  )
} 

export default Banner