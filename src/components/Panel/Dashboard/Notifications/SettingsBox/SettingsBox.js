import React, { Component } from 'react';

import Button from '../../../../UI/Button/Button';
import styles from './SettingsBox.module.scss';

class SettingsBox extends Component {
  render() {

    return (
      <li className={styles.notificationsLiStyle}>
        <p>if you want to change your personal data go to setting !</p>
        <span><i
          className='fas fa-fw fa-sliders-h'
          aria-hidden='true'></i></span>
        <Button>SETTINGS</Button>
      </li>
    )
  }
}

export default SettingsBox