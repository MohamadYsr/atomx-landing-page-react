import React from "react";
import Styles from './home.module.css';
import mainImage from '../../static/image1.png';
import ideaImg from '../../static/idea.png';
import teamImg from '../../static/team.png';
import qualityImg from '../../static/quality.png';
import techSupportImg from '../../static/technical-support.png'; 

const Home = () => {
    return (
        <div className={Styles.homeContainer} id="home">
            <div className="content">
                <div className={Styles.textContainer}>
                    <span className={Styles.text}>أتوم أكس رواد الحلول التقنية</span>
                    <span className={Styles.subText}>شعارنا؛ واقعنا تطبيق حلمك</span>
                </div>

                <div className={Styles.cardsContainer}>
                    <div className={Styles.column}>
                        <div className={Styles.card}>
                            <div className={Styles.iconContainer}>
                                <img src={ideaImg} alt="ideaimage" className={Styles.icon} />
                            </div>
                            <p>لا حدود لأفكارك <br /> ولا حدود لبرمجتنا</p>
                        </div>

                        <div className={Styles.card}>
                            <div className={Styles.iconContainer}>
                                <img src={teamImg} alt="ideaimage" className={Styles.icon} />
                            </div>
                            <p>فريق عمل <br/>و مبرمجين<br />محترفين</p>
                        </div>
                    </div>

                    <div className={Styles.column}>
                        <div className={Styles.card}>
                            <div className={Styles.iconContainer}>
                                <img src={qualityImg} alt="ideaimage" className={Styles.icon} />
                            </div>
                            <p>جودة و اتقان<br />و سرعة بالتنفيذ</p>
                        </div>

                        <div className={Styles.card}>
                            <div className={Styles.iconContainer}>
                                <img src={techSupportImg} alt="ideaimage" className={Styles.icon} />
                            </div>
                            <p>دعم فني<br />لخدمتك دائما</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.imageContainer}>
                <img src={mainImage} alt="programming-illustration" className={Styles.image} />
            </div>
        </div>
    )
}

export default Home;
