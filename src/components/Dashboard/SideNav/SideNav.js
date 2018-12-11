import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SideNav.module.scss';

class SideNav extends Component {
  render() {
    return (
      // <div className={styles.sideNav}>
      //   <div className={styles.name}>
      //     <h1>MEDKIT</h1>
      //     <label htmlFor={styles.toggle}>&#9776;</label>
      //     <input type='checkbox' id={styles.toggle}></input>
      //     <ul>
      //       <li><NavLink to='/'><span><i
      //         className='fa fa-fw fa-chart-bar'
      //         aria-hidden='true'></i></span><p>Dashboard</p></NavLink></li>
      //       <li><NavLink to='/'><span><i
      //         className='fa fa-fw fa-vial'
      //         aria-hidden='true'></i></span><p>Laboratory</p></NavLink></li>
      //       <li><NavLink to='/'><span><i
      //         className='fa fa-fw fa-calendar-alt'
      //         aria-hidden='true'></i></span><p>Tests Calendar</p></NavLink></li>
      //       <li><NavLink to='/'><span><i
      //         className='fa fa-fw fa-prescription-bottle-alt'
      //         aria-hidden='true'></i></span><p>Prescriptions</p></NavLink></li>
      //       <li><NavLink to='/'><span><i
      //         className='fa fa-fw fa-id-card-alt'
      //         aria-hidden='true'></i></span><p>Personal Data</p></NavLink></li>
      //       <li><NavLink to='/'><span><i
      //         className='fa fa-fw fa-cog'
      //         aria-hidden='true'></i></span><p>Settings</p></NavLink></li>
      //     </ul>
      //   </div>
      // </div>
      <div className={styles.sideNavigation}>
        <h1>MEDKIT</h1>
        <label htmlFor={styles.toggle}>&#9776;</label>
        <input type='checkbox' id={styles.toggle}></input>
        <ul>
          <li><NavLink to='/'><span><i
            className='fa fa-fw fa-chart-bar'
            aria-hidden='true'></i></span><p>Dashboard</p></NavLink></li>
          <li><NavLink to='/'><span><i
            className='fa fa-fw fa-vial'
            aria-hidden='true'></i></span><p>Laboratory</p></NavLink></li>
          <li><NavLink to='/'><span><i
            className='fa fa-fw fa-calendar-alt'
            aria-hidden='true'></i></span><p>Tests Calendar</p></NavLink></li>
          <li><NavLink to='/'><span><i
            className='fa fa-fw fa-prescription-bottle-alt'
            aria-hidden='true'></i></span><p>Prescriptions</p></NavLink></li>
          <li><NavLink to='/'><span><i
            className='fa fa-fw fa-id-card-alt'
            aria-hidden='true'></i></span><p>Personal Data</p></NavLink></li>
          <li><NavLink to='/'><span><i
            className='fa fa-fw fa-cog'
            aria-hidden='true'></i></span><p>Settings</p></NavLink></li>
        </ul>
        <div className={styles.sideBox}></div>
      </div>
    )
  }
}

export default SideNav;