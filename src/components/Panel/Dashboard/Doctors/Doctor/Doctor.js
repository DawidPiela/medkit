import React, { Component } from 'react';

import * as doctors from './doctorsInfo';
import photo_jq from '../../../../../assets/images/doctor_1.jpg';
import photo_vp from '../../../../../assets/images/doctor_2.jpg';
import photo_sr from '../../../../../assets/images/doctor_3.jpg';
import photo_mj from '../../../../../assets/images/doctor_4.jpg';
import styles from './Doctor.module.scss';

class Doctor extends Component {
  state = {
    doctors: {
      JQ1: doctors.JQ1,
      VP1: doctors.VP1,
      SR1: doctors.SR1,
      MJ1: doctors.MJ1
    }
  }
  render() {
    const doctorsArray = [];
    for (let key in this.state.doctors) {
      doctorsArray.push({
        id: key,
        config: this.state.doctors[key]
      });
    }

    let doctorPhoto

    let doctorOutput = doctorsArray.map(doctor => {
      switch (doctor.id) {
        case 'JQ1':
          console.log('cdd')
          doctorPhoto = photo_jq
          break;
        case 'VP1':
          doctorPhoto = photo_vp
          break;
        case 'SR1':
          doctorPhoto = photo_sr
          break;
        case 'MJ1':
          doctorPhoto = photo_mj
          break;
        default:
          break;
      }
      return <div
        key={doctor.id}
      >
        <p>{doctor.config.name}</p>
        <img className={styles.doctorPhoto} src={doctorPhoto} alt="doctor"></img>
        <p>{doctor.config.specialization}</p>
        <p>{doctor.config.info}</p>
      </div>
    })

    return (
      <>
        {doctorOutput}
      </>
    )
  }
}

export default Doctor