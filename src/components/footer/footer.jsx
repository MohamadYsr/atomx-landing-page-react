import React from "react";
import Styles from './footer.module.css';
import logo from '../../static/ato.png';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    return (
        <div className={Styles.footerContainer}>
            <div className={Styles.footerInfoContainer}>
                <div className={Styles.info}>
                    <div className={Styles.imageContainer}>
                        <img src={logo} alt="logo" className={Styles.image} />
                    </div>

                    <div className={Styles.creditsText}>
                        <p>أتوم أكس للحلول التقنية واقعنا تطبيق حلمك</p>
                    </div>
                </div>

                <div className={Styles.social}>
                    <p>تابعنا على </p>

                    <div className={Styles.iconHolder}>
                        <i class="bi bi-twitter"></i>
                    </div>

                    <div className={Styles.iconHolder}>
                        <i class="bi bi-instagram"></i>
                    </div>
                </div>
            </div>

            <div className={Styles.credits}>
                <p>مؤسسة أتوم أكس للحلول التقنية © atomxtechnology.com</p>
            </div>
        </div>
    )
}

export default Footer;