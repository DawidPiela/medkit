import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './TopNav.module.scss';

class TopNav extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav>
          <div className={styles.container}>
            <div className={styles.navbar}>
              <div className={styles.menuContent}>
                <ul className={styles.menu}>
                  <li><NavLink to='/'>To the HomePage!</NavLink></li>
                  <li>
                    <div className={styles.separator}></div>
                  </li>
                  <div className={styles.namePanel}>
                    <li>
                      <p>{this.props.fullName}</p>
                    </li>
                    <li><span><i className='fa fa-fw fa-angle-down' aria-hidden='true'></i></span></li>
                    <li><div className={styles.centerImg}><div className={styles.userPhoto}></div></div></li>
                    <div className={styles.dropdownMenu}>
                      <a className={styles.dropdownItem} href='/'>
                      <i className='fa fa-fw fa-id-card-alt' aria-hidden='true'></i>
                      <span>Profile</span></a>
                      <a className={styles.dropdownItem} href='/'>
                      <i className='fa fa-fw fa-cog' aria-hidden='true'></i>
                      <span>Settings</span></a>
                      <div className={styles.divider}></div>
                      <a className={styles.dropdownItem} href='/'>
                      <i className='fa fa-fw fa-power-off' aria-hidden='true'></i>
                      <span>Log out</span></a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default TopNav