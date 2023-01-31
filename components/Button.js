import React from 'react'
import styles from '../styles/button.module.css'
import mobileNavStyle from '../styles/navbar.module.css';


function Button(props, inMobileNav) {
  return (
    <div className={styles.buttonBorder}>
      <button className={inMobileNav ? styles.signMeUpBtn : mobileNavStyle.mobileNavLink}> {props.text} </button>
    </div>
  )
}

export default Button