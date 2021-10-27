import React from "react";
import Styles from "../css/LearningUi.module.css";
export default function learningUi() {
  return (
    <>
    
      <section class={`tabs-navigations ${Styles.learningSection}`}>
        <div class="container">
          <div class="row">
            <div className={Styles.tablink}>
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <span>.</span> Learn & Have Fun
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <span>.</span> Invest & Profit
                </button>
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <span>.</span> Live On
                </button>
              </div>
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className={Styles.tabContentData}>
                    <h2>Learn & Have Fun</h2>
                    <p>
                      Our goal is to remove the barriers to investing. By taking
                      you through baby steps, we're making it more initutive,
                      fun and easy to understand what the hell blockchain
                      projects are really doing.
                    </p>

                    <img
                      src="./assets/learn.PNG"
                      alt="technology"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                     <div className={Styles.tabContentData}>
                    <h2>Invest & Profit</h2>
                    <p>
                      Our goal is to remove the barriers to investing. By taking
                      you through baby steps, we're making it more initutive,
                      fun and easy to understand what the hell blockchain
                      projects are really doing.
                    </p>

                    <img
                      src="./assets/learn.PNG"
                      alt="technology"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                     <div className={Styles.tabContentData}>
                    <h2>Live On</h2>
                    <p>
                      Our goal is to remove the barriers to investing. By taking
                      you through baby steps, we're making it more initutive,
                      fun and easy to understand what the hell blockchain
                      projects are really doing.
                    </p>

                    <img
                      src="./assets/learn.PNG"
                      alt="technology"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
