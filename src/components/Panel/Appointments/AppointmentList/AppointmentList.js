import React, { Component } from 'react';
import { connect } from 'react-redux'

import styles from './AppointmentList.module.scss';
import axios from '../../../../axios-instance';
import * as actions from '../../../../store/actions/index';
import Appointment from './Appointment/Appointment';
import Spinner from '../../../UI/Spinner/Spinner';

class AppointmentList extends Component {

  state = {
    currentPage: 1,
    appointmentsPerPage: 4
  }

  componentDidMount() {
    this.props.onFetchAppointmentData(this.props.token, this.props.userId)
  }

  currentPageHandler = event => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    let paragraphStyle = {
      padding: '25px',
      fontSize: '16px'
    }

    let appointments = this.props.appointmentsListData.map(appointment => (
      <Appointment
        key={appointment.id}
        appointmentData={appointment.appointmentData}
      />
    ))

    const indexOfLastAppointment = this.state.currentPage * this.state.appointmentsPerPage
    const indexOfFirstAppointment = indexOfLastAppointment - this.state.appointmentsPerPage
    const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment)

    const renderAppointments = currentAppointments.map((appointment, index) => {
      return <li key={index} className={styles.liStyle}>{appointment}</li>
    })

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(appointments.length / this.state.appointmentsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.currentPageHandler}
          className={styles.pageNumbersLiStyle}
        >
          {number}
        </li>
      )
    })

    return (
      <div className={styles.box}>
        <h3>Appointments</h3>
        {!this.props.loading ?
          <div>
            {renderAppointments ?
              <>
                <ul className={styles.ulStyle}>
                  {renderAppointments}
                </ul>
                <ul className={styles.pageNumbersUlStyle}>
                  {renderPageNumbers}
                </ul>
              </>
              : <p style={paragraphStyle}>You don't have any appointment yet!</p>
            }

          </div>
          : <Spinner />}
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
    onFetchAppointmentData: (token, userId) =>
      dispatch(actions.fetchAppointmentData(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList, axios)