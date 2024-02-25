import React from "react";
import Styles from './about.module.css';
import goalsImg from '../../static/goals.png';
import successImg from '../../static/success.png';
import qualityImg from '../../static/qualityIllustration.png';

const About = () => {
    return (
        <div className={Styles.aboutContainer}>
            <div className={Styles.aboutTitle}>
                <h1>من <span>نحن؟</span></h1>
            </div>

            <div className={Styles.section}>
                <div className={Styles.imageContainer}>
                    <img src={goalsImg} alt="goalsimage" className={Styles.image}/>
                </div>

                <div className={Styles.sectionText}>
                    <h1><span>أهدافك هي أهدافنا</span></h1>
                    <p>تجمع مختصين بمجالات عدة لتمكين قدراتهم على ان نحقق نجاح مشاريع العملاء وجعل مشاريعهم متصدره بين المنافسين لتكون الأفضل وبهذا فنحن نعزز شعارنا؛ واقعنا تطبيق حلمك</p>
                </div>
            </div>

            <div className={Styles.section}>
                <div className={Styles.sectionText}>
                    <h1><span>نسعى لنكون وجهتك الأولى</span></h1>
                    <p>لكوننا روّاد التقنية، فنحن نسعى بأن يكون كل عميل لنا رائد في مجاله
                    والنهوض بمشروعه الى آفاق النجاح وأن نكون الوجهة الأولى له في تقنية المعلومات كما نطمح أن نتصدّر دائمًا كأفضل شركة برمجة في السعودية</p>
                </div>
                
                <div className={Styles.imageContainer}>
                    <img src={successImg} alt="successImg" className={Styles.image}/>
                </div>
                
            </div>

            <div className={Styles.section}>
                <div className={Styles.imageContainer}>
                    <img src={qualityImg} alt="qualityImg" className={Styles.image}/>
                </div>

                <div className={Styles.sectionText}>
                    <h1><span>قيّمون بقيّمنا</span></h1>
                    <p>حرصنا على أن يكون فريق عملنا يحظى بالقيم السامية التي نؤمن بها
                    واهمها الشفافية والثقة، والارتقاء بالجودة، والالتزام. وكل هذا فقط
                    لنقدم لك خدمات التقنية بجودة عالية وخصوصة تامة مما يجعلنا من
                    أفضل شركات البرمجة في آليات العمل</p>
                </div>
            </div>
        </div>
    )
}

export default About;