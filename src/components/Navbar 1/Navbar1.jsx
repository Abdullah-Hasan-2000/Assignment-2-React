import React from 'react'
import Phone from '../../assets/vector4.svg'
import Email from '../../assets/vector2.svg'
import Facebook from '../../assets/square-facebook-brands.svg'
import Linkedin from '../../assets/linkedin-brands.svg'
import Twitter from '../../assets/square-x-twitter-brands.svg'
import styles from './navbar1.module.css'

const Navbar1 = () => {
    return (
        <>
            <div className={styles.background_color}>
                <div className={styles.navbar_main}>
                    <div className={styles.container}>
                        <ul className={styles.list_style}>
                            <li className={styles.alignment} >
                                <img src={Phone} alt="" />
                                <a className={styles.anchor_style} href="#">(+1)3344 999 999</a>
                            </li>
                            <li className={styles.alignment} >
                                <img src={Email} alt="" />
                                <a className={styles.anchor_style} href="#">info@reactheme.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.container}>
                        <ul className={styles.list_style}>
                            <li >
                                <a className={styles.anchor_style} href="#"><img className={styles.img_dimensions} src={Facebook} alt="" /></a>
                            </li>
                            <li >
                                <a className={styles.anchor_style} href="#"><img className={styles.img_dimensions} src={Twitter} alt="" /></a>
                            </li>
                            <li >
                                <a className={styles.anchor_style} href="#"><img className={styles.img_dimensions} src={Linkedin} alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Navbar1