import React from 'react';
import Styles from '../css/GetStartedUi.module.css';
export default function GetStartedUi() {
    return (
        <div className={Styles.getStartedSection}>
            <div className="container">
                <div className={Styles.getStartWrapper}>
                    <div className="row">
                        <div className="col-lg-7">
                        <div className={Styles.content}>
                        <p>Behind every successfull project is a successfull comunity</p>
                        <h2>Join the LearnPad to
                            <span className="lightGreen"> learn,invest </span>
                            and <br /> <span className="lightGreen"> win </span>
                            togather.
                            </h2>
                        <button className={Styles.getbutton}>Get Started</button>
                        </div>
                        
                    </div>
                    <div className="col-lg-5">
                            <img src="/assets/getstartedImage.png" alt="get started icon"/>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
