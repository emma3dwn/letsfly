import React from 'react'


function Button(props) {
  return (
    <div className={styles.buttonBorder}>
      <button className={styles.buttonParagraph}> {props.text} </button>
    </div>
  )
}

export default Button