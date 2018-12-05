import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/HomePage/Header/Header';
import styles from './Layout.module.scss';

class Layout extends Component {

    render() {
        return (
            <>
                <Header
                    isAuth={this.props.isAuthenticated}
                />
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