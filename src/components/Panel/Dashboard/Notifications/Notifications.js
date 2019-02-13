import React, { Component } from 'react';

import PrescriptionList from './PrescriptionList/PrescriptionList';
import SettingsBox from './SettingsBox/SettingsBox';
import Info from './Info/Info';
import Greetings from './Greetings/Greetings';
import styles from './Notifications.module.scss';

class Notifications extends Component {
  render() {

    return (
      <ul className={styles.notifications}>
        <Greetings />
        <SettingsBox />
        <Info />
        <PrescriptionList />
      </ul>
    )
  }
}

export default Notifications