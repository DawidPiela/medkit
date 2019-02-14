import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../../UI/Button/Button';
import styles from './SettingsBox.module.scss';

class SettingsBox extends Component {
  render() {

    return (
      <li className={styles.notificationsLiStyle}>
        <h4>Settings</h4>
        <span><i
          className='fas fa-fw fa-sliders-h'
          aria-hidden='true'></i></span>
        <p>if you want to change your personal data go to setting !</p>
        <NavLink to='/panel/settings'>
          <Button btnType="Anchor">SETTINGS</Button>
        </NavLink>
      </li>
    )
  }
}

export default SettingsBox