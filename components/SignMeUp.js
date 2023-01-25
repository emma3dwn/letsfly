import React from 'react'
import styles from '../styles/signMeUp.module.css'

function SignMeUp(props) {

  return (
    <div className={styles.signMeUpWrapper}>
      <h2 className={styles.signMeUpHeading}> {props.heading} </h2>
      <button className={styles.signMeUpBtn}> {props.paragraph} </button>
    </div>
  )
}

export default SignMeUp