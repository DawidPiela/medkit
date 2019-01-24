import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';
import styles from './UserPhoto.module.scss';

class UserPhoto extends Component {
  componentDidMount() {
    this.props.onSetPhotoUrl(null, this.props.token, this.props.userId)
  }

  render() {
    let photoCircle

    if (!this.props.photoUrl || this.props.photoUrl === undefined) {
      photoCircle = (
        <span className={`${'fa-stack fa-2x'} ${styles.userPhotoIcon}`}>
          <i className='far fa-circle fa-stack-2x'></i>
          <i className='fas fa-user fa-stack-1x'></i>
        </span>
      )
    } else {
      photoCircle = (
        <img className={styles.userPhoto} src={this.props.photoUrl} alt="user"></img>
      )
    }
    return (
      <>{photoCircle}</>
    )
  }
}

const mapStateToProps = state => {
  return {
    photoUrl: state.photo.photoUrl,
    userId: state.auth.userId,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetPhotoUrl: (photoUrl, token, userId) =>
      dispatch(actions.setPhotoUrl(photoUrl, token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPhoto)