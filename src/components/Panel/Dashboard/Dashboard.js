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
        {/* <ul className={styles.pages}>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/">Doctors</a></li>
        </ul> */}
      </div>
    )
  }
}

export default Dashboard