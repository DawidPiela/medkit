import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../../UI/Button/Button';
import styles from './PrescriptionList.module.scss';
import Prescriptions from '../../../Prescriptions/Prescriptions';

class PrescriptionList extends Component {
  render() {

    return (
      <li className={styles.notificationsLiStyle}>
        <h4>Check your prescriptions!</h4>
        <ul>
          <li>
            <p>Vitamin D3</p>
            <span>
              <i className='fas fa-pills' aria-hidden='true'></i>
            </span>
          </li>
          <li>
            <p>Omega 3</p>
            <span>
              <i className='fas fa-pills' aria-hidden='true'></i>
            </span>
          </li>
        </ul>
        <NavLink to='/panel/prescriptions'>
          <Button btnType="Anchor">TO ALL PRESCRIPTIONS!</Button>
        </NavLink>
      </li>
    )
  }
}

export default PrescriptionList