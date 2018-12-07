import React, { Component } from 'react';

import styles from './Doctor.module.scss';

class Doctor extends Component {
  render() {
    return (
      <div className={`${styles.teamMember} ${styles.oneCol}`}>
        <img src={this.props.photo} alt='doctor' />
        <div>
          <h2>{this.props.fullName}</h2>
          <span>{this.props.position}</span>
        </div>
      </div>
    )
  }
}

export default Doctor;