import React, { Component } from "react";

import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={styles.footerTop}>
          <div className={styles.container}>
            <div className={styles.oneCol}>
              <h3>About us</h3>
              <p>
                App for managing a medical facility. This app contains patient menu, 
                health tests, laboratory, PDF reports and many more.
                It also has a calendar with available tests and tests that you already sign up on.
              </p>
            </div>
            <div className={styles.oneCol}>
              <h3>Contact</h3>
              <ul className={styles.contact}>
                <li>Phone: 555-222</li>
                <li>E-mail: contact@medkit.com</li>
                <li>Headquarters: 254 W 54th St, New York, NY</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.container}>
            <p>
              Copyright 2018 © <a href="a">medkit.com</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
