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