import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import TopNav from './TopNav/TopNav';
import Appointments from './Appointments/Appointments';
import Dashboard from './Dashboard/Dashboard';
import Laboratory from './Laboratory/Laboratory';
import Prescriptions from './Prescriptions/Prescriptions';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';
import photo from '../../assets/images/doctor_4.jpg';
import styles from './Panel.module.scss';

class Panel extends Component {
  state = {
    drawerOpen: false
  }

  sideDrawerHandler = () => {
    this.setState(prevState => {
      return {
        drawerOpen: !prevState.drawerOpen
      }
    })
  }

  render() {

    let contentClasses = ` ${styles.marginMobile} ${styles.content} `

    if (this.state.drawerOpen) {
      contentClasses = ` ${styles.marginDesktop} ${styles.content} `
    } else {
      contentClasses = ` ${styles.marginMobile} ${styles.content} `
    }

    return (
      <>
        <header className={styles.header}>
          <TopNav fullName='John Doe' userPhoto={photo} />
        </header>
        <header className={styles.sideNav}>
          <label htmlFor={styles.toggle}>&#9776;</label>
          <input type='checkbox' ref='check_me' onClick={this.sideDrawerHandler} id={styles.toggle}></input>
          <h1>MEDKIT</h1>
          <ul>
            <li><NavLink
              activeClassName={styles.active} to='/panel/dashboard'><span><i
                className='fa fa-fw fa-chart-bar'
                aria-hidden='true'></i></span><p>Dashboard</p></NavLink></li>
            <li><NavLink
              activeClassName={styles.active} to='/panel/laboratory'><span><i
                className='fa fa-fw fa-vial'
                aria-hidden='true'></i></span><p>Laboratory</p></NavLink></li>
            <li><NavLink
              activeClassName={styles.active} to='/panel/appointments'><span><i
                className='fa fa-fw fa-calendar-alt'
                aria-hidden='true'></i></span><p>Appointments</p></NavLink></li>
            <li><NavLink
              activeClassName={styles.active} to='/panel/prescriptions'><span><i
                className='fa fa-fw fa-prescription-bottle-alt'
                aria-hidden='true'></i></span><p>Prescriptions</p></NavLink></li>
            <li><NavLink
              activeClassName={styles.active} to='/panel/profile'><span><i
                className='fa fa-fw fa-id-card-alt'
                aria-hidden='true'></i></span><p>Personal Data</p></NavLink></li>
            <li><NavLink
              activeClassName={styles.active} to='/panel/settings'><span><i
                className='fa fa-fw fa-cog'
                aria-hidden='true'></i></span><p>Settings</p></NavLink></li>
          </ul>
          <div className={styles.sideBoxTop}></div>
          <div className={styles.sideBox}></div>
        </header>
        <div className={contentClasses}>
          <Route path='/panel/appointments' component={Appointments} />
          <Route path='/panel/dashboard' component={Dashboard} />
          <Route path='/panel/laboratory' component={Laboratory} />
          <Route path='/panel/prescriptions' component={Prescriptions} />
          <Route path='/panel/profile' component={Profile} />
          <Route path='/panel/settings' component={Settings} />
        </div>
      </>
    );
  }
}

export default Panel;
