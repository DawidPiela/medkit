import React, { Component } from 'react';

import styles from './BgPhoto.module.scss';

class BgPhoto extends Component {
  render() {
    return (
      <div className={styles.bgPhoto}>
        <div className={styles.container}>
          <div className={styles.bgContent}>
            <h1>Medkit</h1>
            <p>App for managing a medical facility.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BgPhoto;