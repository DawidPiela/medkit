import React, { Component } from 'react';

import AppointmentList from './AppointmentList/AppointmentList';
import AppointmentForm from './AppointmentForm/AppointmentForm';

class Appointments extends Component {

  render() {

    return (
      <>
        <AppointmentForm />
        <AppointmentList />
      </>
    )
  }
}

export default Appointments