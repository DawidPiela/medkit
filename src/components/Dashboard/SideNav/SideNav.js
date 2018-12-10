import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SideNav.module.scss';

class SideNav extends Component {
  render() {
    return (
      <div className={styles.sideNav}>
        <div className={styles.name}>
          <p>MEDKIT</p>
        </div>
        <ul>
          <li><NavLink to='/'><span><i className='fa fa-fw fa-chart-bar' aria-hidden='true'></i></span>Dashboard</NavLink></li>
          <li><NavLink to='/'><span><i className='fa fa-fw fa-vial' aria-hidden='true'></i></span>Laboratory</NavLink></li>
          <li><NavLink to='/'><span><i className='fa fa-fw fa-calendar-alt' aria-hidden='true'></i></span>Tests Calendar</NavLink></li>
          <li><NavLink to='/'><span><i className='fa fa-fw fa-prescription-bottle-alt' aria-hidden='true'></i></span>Prescriptions</NavLink></li>
          <li><NavLink to='/'><span><i className='fa fa-fw fa-id-card-alt' aria-hidden='true'></i></span>Personal Data</NavLink></li>
          <li><NavLink to='/'><span><i className='fa fa-fw fa-cog' aria-hidden='true'></i></span>Settings</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default SideNav;