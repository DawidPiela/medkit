import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import './Header.module.scss';
import Logo from '../../../assets/images/logo.png';

class Header extends Component {

  render() {
    return (
      <header>
        <nav>
          <div className={styles.container}>
            <div className={styles.navbar}>
              <div className={styles.navLogo}>
                <a href='a'><img src={Logo} alt='logotype' /></a>
              </div>
              <div className={styles.menuContent}>
                <label htmlFor={styles.toggle}>&#9776;</label>
                <input type='checkbox' id={styles.toggle}></input>
                <ul id={styles.menu}>
                  <li><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/'>About</NavLink></li>
                  <li><NavLink to='/'>Doctors</NavLink></li>
                  <li><NavLink to='/'>Contact</NavLink></li>
                  <li><NavLink to='/auth'>To the App!</NavLink></li>
                  {/* <li>{!this.props.isAuth
                    ? <NavLink to='/auth'>Log in</NavLink>
                    : <NavLink to='/logout'>Log out</NavLink>
                  }</li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

    )
  }
}

export default Header;
