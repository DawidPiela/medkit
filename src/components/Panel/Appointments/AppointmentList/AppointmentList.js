import React, { Component } from 'react';
import { connect } from 'react-redux'

import axios from '../../../../axios-instance';
import * as actions from '../../../../store/actions/index';
import Appointment from './Appointment/Appointment';

class AppointmentList extends Component {
  componentDidMount() {
    this.props.onFetchAppointmentData(this.props.token, this.props.userId)
  }
  render() {
    let appointments = this.props.appointmentsListData.map(appointment => (
      <Appointment />
    ))
    return (
      <p>{appointments}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    appointmentsListData: state.appointment.appointmentsListData,
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