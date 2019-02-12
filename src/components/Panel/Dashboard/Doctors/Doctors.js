import React, { Component } from 'react';

import Doctor from './Doctor/Doctor';
import styles from './Doctors.module.scss';

class Doctors extends Component {
  render() {

    return (
      <div className={styles.doctors}>
        <Doctor />
      </div>
    )
  }
}

export default Doctors