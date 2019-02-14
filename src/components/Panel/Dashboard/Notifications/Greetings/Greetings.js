import React, { Component } from 'react';

import styles from './Greetings.module.scss';

class Greetings extends Component {
  render() {

    return (
      <li className={styles.notificationsLiStyle}>
        <h4>Welcome user!</h4>
        <p>On this page you can see what is this App about.</p>
        <p>You can change tab in menu on the left.</p>
        <span><i
          className='fas fa-fw fa-comment-medical'
          aria-hidden='true'></i></span>
      </li>
    )
  }
}

export default Greetings