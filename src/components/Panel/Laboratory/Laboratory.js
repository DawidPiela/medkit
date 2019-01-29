import React, { Component } from 'react';

import LaboratoryForm from './LaboratoryForm/LaboratoryForm';
import TestList from './TestList/TestList';
import styles from './Laboratory.module.scss';

class Laboratory extends Component {
  render() {
    return (
      <>
        <div className={styles.box}>
          <LaboratoryForm />
        </div>
        <div className={styles.box}>
          <TestList />
        </div>
      </>
    )
  }
}

export default Laboratory