import React, { Component } from 'react';

import Button from '../../../../UI/Button/Button';
import styles from './Info.module.scss';

class Info extends Component {
  render() {

    return (
      <li className={styles.notificationsLiStyle}>
        <p>if you want to add an appointment go to Appointments or Laboratory Component!</p>
        <span><i
          className='far fa-fw fa-lightbulb'
          aria-hidden='true'></i></span>
        <Button>LABORATORY</Button>
        <Button>APPOINTMENTS</Button>
      </li>
    )
  }
}

export default Info