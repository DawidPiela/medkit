import React, { Component } from 'react';

import styles from './Dashboard.module.scss';
import Notifications from './Notifications/Notifications';
import Doctors from './Doctors/Doctors';
import Tabs from './Tabs/Tabs';

class Dashboard extends Component {
  render() {

    return (
      <div className={styles.box}>
        <Tabs>
          <div label="DASHBOARD">
            <Notifications />
          </div>
          <div label="DOCTORS">
            <Doctors />
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Dashboard