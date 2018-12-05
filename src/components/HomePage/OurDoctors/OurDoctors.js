import React, { Component } from 'react';

import styles from './OurDoctors.module.scss';
import Doctor from './Doctor/Doctor';
import DoctorPhoto1 from '../../../assets/images/doctor_1.jpg';
import DoctorPhoto2 from '../../../assets/images/doctor_2.jpg';
import DoctorPhoto3 from '../../../assets/images/doctor_3.jpg';
import DoctorPhoto4 from '../../../assets/images/doctor_4.jpg';

class OurDoctors extends Component {
  render() {
    return (
      <div className={styles.team}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Our Doctors</h2>
            <p>We have some of the best specialists in the country. 
              Check below informations about them.
            </p>
          </div>
          <div className={styles.teamMembers}>
            <Doctor photo={DoctorPhoto1} fullName="Joan Quinn" position="Sport Physician" />
            <Doctor photo={DoctorPhoto2} fullName="Vince Patel" position="Cardiologist" />
            <Doctor photo={DoctorPhoto3} fullName="Susan Reily" position="Dietician" />
            <Doctor photo={DoctorPhoto4} fullName="Mike Jones" position="Internist" />
          </div>
        </div>
      </div>
    )
  }
}

export default OurDoctors;