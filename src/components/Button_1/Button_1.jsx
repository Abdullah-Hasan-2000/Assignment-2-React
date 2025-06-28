import React from 'react'
import arrow from '../../assets/vector.svg'
import styles from './Button_1.module.css'

const Button_1 = ({text}) => {
  return (

  <div className={styles.lms_button}>
    <button className={`${styles.button}`}>{text}<img src={arrow} alt="" /></button>
  </div>
  
  )
}

export default Button_1