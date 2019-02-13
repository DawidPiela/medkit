import React, { Component } from 'react';

import Doctor from './Doctor/Doctor';
import styles from './Doctors.module.scss';

class Doctors extends Component {
  render() {

    return (
      <ul className={styles.doctors}>
        <Doctor />
      </ul>
    )
  }
}

export default Doctors