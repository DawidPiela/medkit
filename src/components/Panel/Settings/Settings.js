import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Settings.module.scss'
import * as actions from '../../../store/actions/index';

class Settings extends Component {

  componentDidMount() {
    this.props.onSetPhotoUrl(null, this.props.token, this.props.userId)
  }

  onPhotoUpload = () => {
    let file = document.getElementById('settings_component_input').files[0]

    this.props.onInitPhotoUpload(file, this.props.token, this.props.userId)
  }

  render() {
    let photoCircle

    if (!this.props.photoUrl || this.props.photoUrl === undefined) {
      photoCircle = (
        <div className={styles.userPhotoIcon}>
          <i
            className='fas fa-fw fa-user'
            aria-hidden='true'></i>
        </div>

      )
    } else {
      photoCircle = (
        <img className={styles.userPhoto} src={this.props.photoUrl} alt="user"></img>
      )
    }

    return (
      <>
        <input type="file" id="settings_component_input"></input>
        <button onClick={this.onPhotoUpload}>Upload photo</button>
        {photoCircle}
      </>
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
    onInitPhotoUpload: (photoFile, token, userId) =>
      dispatch(actions.initPhotoUpload(photoFile, token, userId)),
    onSetPhotoUrl: (photoUrl, token, userId) => dispatch(actions.setPhotoUrl(photoUrl, token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)