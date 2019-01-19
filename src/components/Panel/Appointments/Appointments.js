import React, { Component } from 'react';

import styles from './Appointments.module.scss';
import AppointmentList from './AppointmentList/AppointmentList';
// import AppointmentForm from './AppointmentForm/AppointmentForm';

class Appointments extends Component {

  render() {

    return (
      <>
        <div className={styles.box}>
          <AppointmentList />
        </div>
        {/* <div className={styles.box}>
          <AppointmentForm />
        </div> */}
      </>
    )
  }
}

export default Appointments