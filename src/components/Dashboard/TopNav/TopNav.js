import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './TopNav.module.scss';

class TopNav extends Component {
  state = {
    click: false
  }

  dropdownMenuHandler = () => {
    this.setState(prevState => {
      return {
        click: !prevState.click
      }
    })
  }

  render() {
    let dropdownClasses = `${styles.dropdownMenu} ${styles.dontShow}`

    if (this.state.click) {
      dropdownClasses = styles.dropdownMenu
    } else {
      dropdownClasses = `${styles.dropdownMenu} ${styles.dontShow}`
    }

    return (
      <header className={styles.header}>
        <nav>
          <div className={styles.container}>
            <div className={styles.navbar}>
              <div className={styles.menuContent}>
                <div className={styles.flexMenu}>
                  <div
                    className={`${styles.menuItem} ${styles.menuLink}`}>
                    <NavLink to='/'>To the Home Page!</NavLink></div>
                  <div
                    className={`${styles.menuItem} ${styles.menuSeparator}`}></div>
                  <div onClick={this.dropdownMenuHandler} className={styles.navButton}>
                    <div
                      className={styles.menuItem}><p>{this.props.fullName}</p></div>
                    <div
                      className={styles.menuItem}><span><i
                        className='fa fa-fw fa-angle-down'
                        aria-hidden='true'></i></span></div>
                    <div className={styles.menuItem}>
                      <img className={styles.userPhoto} src={this.props.userPhoto} alt='user' />
                    </div>
                  </div>
                </div>
                <div className={dropdownClasses} onClick={this.dropdownMenuHandler}>
                  <NavLink className={styles.dropdownItem} to='/dashboard/profile'>
                    <i className='fa fa-fw fa-id-card-alt' aria-hidden='true'></i>
                    <span>Profile</span>
                  </NavLink>
                  <NavLink className={styles.dropdownItem} to='/dashboard'>
                    <i className='fa fa-fw fa-cog' aria-hidden='true'></i>
                    <span>Settings</span>
                  </NavLink>
                  <div className={styles.divider}></div>
                  <NavLink className={styles.dropdownItem} to='/logout'>
                    <i className='fa fa-fw fa-power-off' aria-hidden='true'></i>
                    <span>Log out</span>
                  </NavLink>
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