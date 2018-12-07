import React, { Component } from 'react';

import styles from './About.module.scss';

class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.title}>
          <h2>About</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.oneCol} >
            <span><i className='fas fa-medkit' aria-hidden='true'></i></span>
            <h3>Patient menu</h3>
            <p>You have access to your personal medical files, prescriptions, tests and many more.</p>
          </div>
          <div className={styles.oneCol}>
            <span><i className='fas fa-user-md' aria-hidden='true'></i></span>
            <h3>Health tests</h3>
            <p>You can search for available health tests, sign up for them and then check the results.</p>
          </div>
          <div className={styles.oneCol}>
            <span><i className='fas fa-vial' aria-hidden='true'></i></span>
            <h3>Laboratory</h3>
            <p>You have access to the best medical equipment to examine your health condition.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;