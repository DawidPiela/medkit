import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SideNav.module.scss';

class SideNav extends Component {
  render() {
    return (
      <div className={styles.sideNavigation}>
        <label htmlFor={styles.toggle}>&#9776;</label>
        <input type='checkbox' id={styles.toggle}></input>
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
      </div>
    )
  }
}

export default SideNav;