import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Prescription from './Prescription/Prescription';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../../axios-instance'

class Prescriptions extends Component {

  componentDidMount() {
    this.props.onFetchPrescriptionData(this.props.token, this.props.userId)
  }

  render() {
    let prescriptions = this.props.prescriptionsListData.map(prescription => (
      <Prescription
        key={prescription.id}
        prescriptionData={prescription.prescriptionData}
      />
    ))

    return (
      <>
        {!this.props.loading ?
          <>
            {prescriptions}
          </>
          : <Spinner />
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    loading: state.prescription.loading,
    prescriptionsListData: state.prescription.prescriptionsListData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPrescriptionData: (token, userId) =>
      dispatch(actions.fetchPrescriptionData(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prescriptions, axios)
