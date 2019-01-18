import React, { Component } from 'react';
import { connect } from 'react-redux'

import axios from '../../../../axios-instance';
import * as actions from '../../../../store/actions/index';
import Appointment from './Appointment/Appointment';
import Spinner from '../../../UI/Spinner/Spinner';

class AppointmentList extends Component {
  componentDidMount() {
    this.props.onFetchAppointmentData(this.props.token, this.props.userId)
  }
  render() {
    let appointments = <Spinner />
    if (!this.props.loading) {
      appointments = this.props.appointmentsListData.map(appointment => (
        <Appointment
          key={appointment.id}
          appointmentData={appointment.appointmentData}
        />
      ))
    }
    return (
      <div>
        {appointments}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appointmentsListData: state.appointment.appointmentsListData,
    loading: state.appointment.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAppointmentData: (token, userId) => dispatch(actions.fetchAppointmentData(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList, axios)