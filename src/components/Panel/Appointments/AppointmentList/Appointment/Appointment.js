import React, { Component } from 'react';
import Moment from 'react-moment';

import styles from './Appointment.module.scss';

class Appointment extends Component {
  render() {
    const appointments = []

    for (let dataName in this.props.appointmentData) {
      appointments.push(
        {
          name: dataName,
          data: this.props.appointmentData[dataName]
        }
      )
    }

    let fullNameDiv = [];

    const appointmentsOutput = appointments.map(data => {
      switch (data.name) {
        case 'date': return <div
          key={data.name}
          className={styles.date}>
          <span>Date:<br /></span>
          <p><Moment format="YYYY/MM/DD">{data.data}</Moment></p>
        </div>
        case 'doctorId':
          switch (data.data) {
            case 'JQ1': return <div
              key={data.name}
              className={styles.doctorId}>
              <span>Your Doctor:<br /></span>
              <p>Joan Quinn</p>
            </div>
            case 'VP1': return <div
              key={data.name}
              className={styles.doctorId}>
              <span>Your Doctor:<br /></span>
              <p>Vince Patel</p>
            </div>
            case 'SR1': return <div
              key={data.name}
              className={styles.doctorId}>
              <span>Your Doctor:<br /></span>
              <p>Susan Reily</p>
            </div>
            case 'MJ1': return <div
              key={data.name}
              className={styles.doctorId}>
              <span>Your Doctor:<br /></span>
              <p>Mike Jones</p>
            </div>
            default: return null
          }
        case 'email': return <div
          key={data.name}
          className={styles.email}>
          <span>Your Email:<br /></span>
          <p>{data.data}</p>
        </div>
        case 'firstName': fullNameDiv.push(data.data, ' '); return null;
        case 'lastName': fullNameDiv.push(data.data); return null;
        case 'message': return <div
          key={data.name}
          className={styles.message}>
          <span>Disease: <br /></span>
          <p>{data.data}</p>
        </div>
        default: return null
      }
    })

    return (
      <div className={styles.listComponent}>
        {appointmentsOutput}
        <div className={styles.fullName}>
          {fullNameDiv}
        </div>
      </div>
    )
  }
}

export default Appointment