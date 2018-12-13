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
                {/* <ul className={styles.menu}>
                  <li><NavLink to='/'>To the HomePage!</NavLink></li>
                  <button className={styles.namePanel}>
                    <li>
                      <p>{this.props.fullName}</p>
                    </li>
                    <li><span><i className='fa fa-fw fa-angle-down' aria-hidden='true'></i></span></li>
                    <li><div className={styles.centerImg}><div className={styles.userPhoto}></div></div></li>
                    <div className={styles.dropdownMenu}>
                      <NavLink className={styles.dropdownItem} to='/dashboard'>
                      <i className='fa fa-fw fa-id-card-alt' aria-hidden='true'></i>
                      <span>Profile</span>
                      </NavLink>
                      <NavLink className={styles.dropdownItem} to ='/dashboard'>
                      <i className='fa fa-fw fa-cog' aria-hidden='true'></i>
                      <span>Settings</span>
                      </NavLink>
                      <div className={styles.divider}></div>
                      <NavLink className={styles.dropdownItem} to='/logout'>
                      <i className='fa fa-fw fa-power-off' aria-hidden='true'></i>
                      <span>Log out</span>
                      </NavLink>
                    </div>
                  </button>
                </ul> */}
                <div className={styles.flexMenu}>
                  <div className={styles.menuItem}><p>{this.props.fullName}</p></div>
                  <div className={ `${styles.menuItem} ${styles.separator}` }></div>
                  <div className={styles.menuItem}>010</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default TopNav