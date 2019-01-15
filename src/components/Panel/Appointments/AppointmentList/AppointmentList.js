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
    // let appointments = this.props.appointmentsListData.map(appointment => (
    //   <Appointment />
    // ))
    let temp = { ...this.props.appointmentsListData }
    let temp2 = [temp].userId
    if (Object.keys(temp).length === 0) {
      console.log('empty')
      temp = 'empty'
    } else {
      temp = this.props.appointmentsListData.map(app => (
        <Appointment
          key={app.id}
          userId={app.userId} />
      ))
    }
    return (
      <p>{temp}</p>
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