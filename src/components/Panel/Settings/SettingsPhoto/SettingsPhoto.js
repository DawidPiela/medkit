import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './SettingsPhoto.module.scss'
import * as actions from '../../../../store/actions/index';

class Settings extends Component {
  state = {
    inputIsValid: false
  }

  componentDidMount() {
    this.props.onSetPhotoUrl(null, this.props.token, this.props.userId)
  }

  onPhotoUpload = () => {
    let file = document.getElementById('settings_component_input').files[0]

    this.props.onInitPhotoUpload(file, this.props.token, this.props.userId)
    this.setState({
      inputIsValid: false
    })
  }

  fileInputChangedHandler = (event) => {
    this.setState({
      inputIsValid: true
    })
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
      <div className={styles.colorBox}>
        {photoCircle}
        <div className={styles.uploadArea}>
          <input
            type="file"
            id="settings_component_input"
            onChange={event => this.fileInputChangedHandler(event)}></input>
          <p>Drag your files here or click in this area.</p>
          <button
            className={styles.Button}
            onClick={this.onPhotoUpload}
            disabled={!this.state.inputIsValid}>
            Upload photo
         </button>
        </div>

      </div>
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
    onSetPhotoUrl: (photoUrl, token, userId) =>
      dispatch(actions.setPhotoUrl(photoUrl, token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)