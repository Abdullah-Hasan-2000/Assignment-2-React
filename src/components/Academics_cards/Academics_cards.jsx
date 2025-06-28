import React from 'react'
import arrow from '../../assets/vector.svg';
import styles from './Academics_cards.module.css'

const Academics_cards = ({image, text}) => {
  return (
    <div className={styles.container_position}>
        <img width="250px" height="280px" src={image} alt="" />
        <div className={styles.text_position}>
            <a className={styles.anchor_style} href='#'>{text}</a>
            <a href='#' className={`${styles.text_position_1} ${styles.anchor_style}`}>Learn More <img  src={arrow} alt="" /></a>
        </div>
        
    </div>
  )
}

export default Academics_cards;