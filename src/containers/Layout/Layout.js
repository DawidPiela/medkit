import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Layout.module.scss';

class Layout extends Component {

  render() {
    return (
      <>
        <main className={styles.Main}>
          {this.props.children}
        </main>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);