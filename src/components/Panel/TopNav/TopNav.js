import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './TopNav.module.scss';
import axios from '../../../axios-instance';
import * as actions from '../../../store/actions/index';

class TopNav extends Component {
  state = {
    click: false,
  }

  componentDidMount() {
    this.props.onInitUserData()
  }

  dropdownMenuHandler = () => {
    this.setState(prevState => {
      return {
        click: !prevState.click
      }
    })
  }

  render() {
    // const user = { ...this.props.userData }
    // const user2 = { ...user.vbTb52IfTGYNMhtbFqhDTPNTRBa2 }
    // const user3 = user2.firstName
    // console.log(user3)
    // this.setState({
    //   firstName: user3
    // })
    let dropdownClasses = `${styles.dropdownMenu} ${styles.dontShow}`

    if (this.state.click) {
      dropdownClasses = styles.dropdownMenu
    } else {
      dropdownClasses = `${styles.dropdownMenu} ${styles.dontShow}`
    }

    return (
      <nav className={styles.flexMenu}>
        <ul className={styles.navContent}>
          <li className={`${styles.navItem} ${styles.menuLink}`}>
            <NavLink to='/'>To the Home Page!</NavLink>
          </li>
          <li onClick={this.dropdownMenuHandler} className={`${styles.navItem} ${styles.navButton}`}>
            <p>{this.props.fullName}</p>
          </li>
          <li onClick={this.dropdownMenuHandler} className={`${styles.navItem} ${styles.navButton}`}>
            <span><i
              className='fa fa-fw fa-angle-down'
              aria-hidden='true'></i></span>
          </li>
          <li onClick={this.dropdownMenuHandler} className={`${styles.navItem} ${styles.navButton}`}>
            <img className={styles.userPhoto} src={this.props.userPhoto} alt='user' />
          </li>
        </ul>
        <div className={dropdownClasses} onClick={this.dropdownMenuHandler}>
          <NavLink className={styles.dropdownItem} to='/panel/profile'>
            <i className='fa fa-fw fa-id-card-alt' aria-hidden='true'></i>
            <span>Profile</span>
          </NavLink>
          <NavLink className={styles.dropdownItem} to='/panel/settings'>
            <i className='fa fa-fw fa-cog' aria-hidden='true'></i>
            <span>Settings</span>
          </NavLink>
          <div className={styles.divider}></div>
          <NavLink className={styles.dropdownItem} to='/logout'>
            <i className='fa fa-fw fa-power-off' aria-hidden='true'></i>
            <span>Log out</span>
          </NavLink>
        </div>
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopNav, axios);