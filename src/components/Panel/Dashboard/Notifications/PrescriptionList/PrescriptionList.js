import React, { Component } from 'react';

import Button from '../../../../UI/Button/Button';
import styles from './PrescriptionList.module.scss';

class PrescriptionList extends Component {
  render() {

    return (
      <li className={styles.notificationsLiStyle}>
        <ul>
          <li>Medicine 1</li>
          <li>Medicine 2</li>
        </ul>
        <Button>To all prescriptions!</Button>
      </li>
    )
  }
}

export default PrescriptionList