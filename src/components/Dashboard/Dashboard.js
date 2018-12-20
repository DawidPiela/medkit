import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import TopNav from './TopNav/TopNav';
import Content from './Content/Content';
import photo from '../../assets/images/doctor_4.jpg';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
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
            <li><NavLink to='/dashboard'><span><i
              className='fa fa-fw fa-chart-bar'
              aria-hidden='true'></i></span><p>Dashboard</p></NavLink></li>
            <li><NavLink to='/dashboard'><span><i
              className='fa fa-fw fa-vial'
              aria-hidden='true'></i></span><p>Laboratory</p></NavLink></li>
            <li><NavLink to='/dashboard'><span><i
              className='fa fa-fw fa-calendar-alt'
              aria-hidden='true'></i></span><p>Tests Calendar</p></NavLink></li>
            <li><NavLink to='/dashboard'><span><i
              className='fa fa-fw fa-prescription-bottle-alt'
              aria-hidden='true'></i></span><p>Prescriptions</p></NavLink></li>
            <li><NavLink to='/dashboard'><span><i
              className='fa fa-fw fa-id-card-alt'
              aria-hidden='true'></i></span><p>Personal Data</p></NavLink></li>
            <li><NavLink to='/dashboard'><span><i
              className='fa fa-fw fa-cog'
              aria-hidden='true'></i></span><p>Settings</p></NavLink></li>
          </ul>
          <div className={styles.sideBoxTop}></div>
          <div className={styles.sideBox}></div>
        </header>
        <div className={contentClasses}>
          <Content />
        </div>
      </>
    );
  }
}

export default Dashboard;
