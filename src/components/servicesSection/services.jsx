import React from "react";
import Styles from './services.module.css';
import mobileAppImg from '../../static/mobileApp.png';
import webDevImg from '../../static/webdev.png';
import analysisImg from '../../static/analysis.png';
import consultImg from '../../static/consult.png';
import manageImg from '../../static/manage.png';
import techSupportImg from '../../static/techsupport.png';


const Services = () => {
    return (
        <div className={Styles.servicesContainer}>
            <div className={Styles.aboutTitle}>
                <h1><span>خدماتنا</span></h1>
            </div>

            <div className={Styles.servicesCardsContainer}>
                <div className={Styles.servicesCard}>
                    <div className={Styles.cardHeader}>
                        <div className={Styles.iconContainer}>
                            <img src={mobileAppImg} alt="mobileAppImg" className={Styles.cardIcon}/>
                        </div>

                        <div className={Styles.x}>
                            <h2>برمجة التطبيقات</h2>
                        </div>
                    </div>

                    <div>
                        <div><p>برمجة و تصميم مواقع لتتناسب مع احتياجاتك وتحقيق طموحاتك سواء كانت واجهة تعريفية، متجر الكتروني، إدارة موارد بشرية، ادارة عملاء </p></div>
                    </div>
                </div>
                <div className={Styles.servicesCard}>
                    <div className={Styles.cardHeader}>
                        <div className={Styles.iconContainer}>
                            <img src={webDevImg} alt="mobileAppImg" className={Styles.cardIcon}/>
                        </div>

                        <h2>برمجة مواقع الكترونية</h2>
                    </div>

                    <div>
                        <div><p>برمجة و تصميم مواقع لتتناسب مع احتياجاتك وتحقيق طموحاتك سواء كانت واجهة تعريفية، متجر الكتروني، إدارة موارد بشرية، ادارة عملاء وغيره من المشاريع</p></div>
                    </div>
                </div>
                <div className={Styles.servicesCard}>
                    <div className={Styles.cardHeader}>
                        <div className={Styles.iconContainer}>
                            <img src={analysisImg} alt="mobileAppImg" className={Styles.cardIcon}/>
                        </div>

                        <h2>دراسة وتخطيط تقني</h2>
                    </div>

                    <div>
                        <div><p>الكثير يحتاج دراسات وخطط تقنية لمعرفة تفاصيل أكثر عن أفكارهم وتخطي العقبات، لذلك نحن نقدم لك أجود الدراسات لتتمكن من معرفة كافة جوانب مشروعك</p></div>
                    </div>
                </div>
                <div className={Styles.servicesCard}>
                    <div className={Styles.cardHeader}>
                        <div className={Styles.iconContainer}>
                            <img src={consultImg} alt="mobileAppImg" className={Styles.cardIcon}/>
                        </div>

                        <h2>استشارات تقنية</h2>
                    </div>

                    <div>
                        <div><p>نحرص في برمجيات أن نقدم لك استشارات ونصائح تقنية كعميل لدينا لتكون في المسار الصحيح وهذا من أهم اهدافنا، التوجيه والإرشاد</p></div>
                    </div>
                </div>
                <div className={Styles.servicesCard}>
                    <div className={Styles.cardHeader}>
                        <div className={Styles.iconContainer}>
                            <img src={manageImg} alt="mobileAppImg" className={Styles.cardIcon}/>
                        </div>

                        <h2>ادارة مشاريع تقنية</h2>
                    </div>

                    <div>
                        <div><p>هل يصعب عليك ادارة مشروعك التقني؟ وهو مكلف بالنسبة لك؟ دعها لفريق الادارة التقنية لدينا وهذا يشمل ادارة الخوادم والشبكات وغيره</p></div>
                    </div>
                </div>
                <div className={Styles.servicesCard}>
                    <div className={Styles.cardHeader}>
                        <div className={Styles.iconContainer}>
                            <img src={techSupportImg} alt="mobileAppImg" className={Styles.cardIcon}/>
                        </div>

                        <h2>دعم فني وصيانة</h2>
                    </div>

                    <div>
                        <div><p>نسعى بأن نرافقك خلال رحلتك الى النجاح بتوفير لك دعم فني وخدمة عملاء وصيانة متكاملة لمشروعك التقني</p></div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Services;