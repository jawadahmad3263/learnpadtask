import React from "react";
import Styles from "../css/ServicesUi.module.css";
export default function ServicesUi() {
  return (
    <div className={Styles.ServicesWrapper}>
      <div className="container">
        <div className="row">
          <div className={Styles.servicesHeading}>
            <h1 className={Styles.topheading}>
              <span className="lightGreen">Take your portfolio</span> to the next level by educating
              yourself and others.
            </h1>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className={Styles.servicCard}>
              <img src="/assets/early.png" alt="icon" />
              <h3 className="lightGreen mt-4">Early</h3>
              <p>
                Get in on highly vetted and <br /> exclusive projects before others.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className={Styles.servicCard}>
              <img src="/assets/experts.png" alt="icon"  />
              <h3 className="lightGreen mt-4">Experts</h3>
              <p className={Styles.cardparagraph}>
                We have 4 years+ experience in crypto invested in 100+ projects
                with up to 116x return and intervied hundreds of CEOs.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className={Styles.servicCard}>
              <img src="/assets/complaints.png" alt="icon"  />
              <h3 className="lightGreen mt-4">Complaints</h3>
              <p className={Styles.cardparagraph}>
                We work with best-in class KYC providers to ensure complaince
                with local laws and prioritize your privacy at all times
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
