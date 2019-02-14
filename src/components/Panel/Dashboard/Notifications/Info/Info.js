import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../../UI/Button/Button';
import styles from './Info.module.scss';

class Info extends Component {
  render() {

    return (
      <li className={styles.notificationsLiStyle}>
        <h4>Make an appointment!</h4>
        <span><i
          className='far fa-fw fa-lightbulb'
          aria-hidden='true'></i></span>
        <p>if you want to add an appointment go to Appointments or Laboratory Component!</p>
        <NavLink to='/panel/laboratory'>
          <Button btnType="Anchor">LABORATORY</Button>
        </NavLink>
        <NavLink to='/panel/appointments'>
          <Button btnType="Anchor">APPOINTMENTS</Button>
        </NavLink>
      </li>
    )
  }
}

export default Info