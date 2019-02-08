import React, { Component } from 'react';

import SettingsPhoto from './SettingsPhoto/SettingsPhoto';
import SettingsForm from './SettingsForm/SettingsForm';
import styles from './Settings.module.scss';

class Settings extends Component {

  render() {

    return (
      <div className={styles.settingsBox}>
        <div className={styles.settingsUserCard}>
          <SettingsPhoto />
          <SettingsForm />
        </div>
      </div>
    )
  }
}

export default Settings