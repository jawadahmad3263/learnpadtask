import React from 'react'
import Styles from '../css/HeroUi.module.css'
export default function HeroUi() {
    return (
        <div className={Styles.heroWrapper}>
            <div className="container">
                <div className="row"
                  >
                    <div className="col-sm-12 col-md-6 col-lg-6 " style={{borderRight:"3px solid #e7eaea" , borderLeft:"2px solid #e7eaea"}}>
                        <div className={Styles.heroContent}>
                             <h1>Make money <span className="lightGreen">by understanding</span> what you invest in</h1>
                             <p className={Styles.paragraph}>
                                 Get exclusive access to top tier projects with <br />
                                 the <span className="darkGreen bold">LearnPad - where knowledge is power!</span>
                             </p>
                             <p className={Styles.powered}>Powered by <span className="lightGreen"> $GAINS </span></p>
                             <button className={Styles.actionBtn}>Get Started</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{borderRight:"2px solid #e7eaea"}}>
                        <div className={Styles.heroImage}>
                            <img src="/assets/heroImage.png" alt="hero icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
