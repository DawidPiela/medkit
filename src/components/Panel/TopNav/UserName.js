import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from '../../../axios-instance';
import * as actions from '../../../store/actions/index';

class UserName extends Component {
  componentDidMount() {
    this.props.onInitUserData()
  }

  render() {
    // const user = { ...this.props.userData }
    // const user2 = { ...user.vbTb52IfTGYNMhtbFqhDTPNTRBa2 }
    // const user3 = user2.firstName
    // console.log(user3)
    // this.setState({
    //   firstName: user3
    // })
    // setTimeout(() => {
    //   const user = this.props.userData.vbTb52IfTGYNMhtbFqhDTPNTRBa2.firstName
    //   console.log(this.props.userData.vbTb52IfTGYNMhtbFqhDTPNTRBa2.firstName)
    // }, 3000)
    // console.log(this.props.userData.vbTb52IfTGYNMhtbFqhDTPNTRBa2.firstName)

    const user = { ...this.props.userData }
    const user20 = { ...user.vbTb52IfTGYNMhtbFqhDTPNTRBa2 }
    const user30 = user20.firstName
    console.log(user30)
    const user2 = user.vbTb52IfTGYNMhtbFqhDTPNTRBa2
    // const user3 = user2.firstName

    return (
      <p>{user30}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitUserData: () => dispatch(actions.initUserData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserName, axios);