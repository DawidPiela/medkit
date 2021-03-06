import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../../../axios-instance';
import * as actions from '../../../../store/actions/index';

class UserName extends Component {
  componentDidMount() {
    this.props.onInitUserData(this.props.token, this.props.userId)
  }

  render() {
    const userData = { ...this.props.userData }
    const user = { ...userData[this.props.userId] }

    return (
      <p>{user.firstName} {user.lastName}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user.userData,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitUserData: (token, userId) => dispatch(actions.initUserData(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserName, axios);