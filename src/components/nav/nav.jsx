import React, { useState } from "react";
import Styles from './nav.module.css';
import logo from '../../static/ato.png';

function Nav () {

    const [showLinks, setShowLinks] = useState(false);

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    }

    return (
        <div className={Styles.navbar}>
            <div className={Styles.logoContainer}>                
                <img src={logo} alt="logo" className={Styles.logo} />
                <div className={Styles.brandName}>ATOMX TECHNOLOGY</div>
            </div>

            <div className={Styles.menuButton} onClick={toggleMenu}>☰</div>

            <div className={`${Styles.navLinks} ${showLinks ? Styles.show : ''}`}>
                <div className={Styles.linkContainer}>
                    <a href="#home" className={Styles.navLink}>الرئيسية</a>
                </div>
                <div className={Styles.linkContainer}>
                    <a href="#about" className={Styles.navLink}>من نحن</a>
                </div>
                <div className={Styles.linkContainer}>
                    <a href="#services" className={Styles.navLink}>خدماتنا</a>
                </div>
            </div>

            <button className={Styles.navButton}>تواصل معنا</button>
        </div>
    )
}

export default Nav;
