import React, { Component } from 'react';

import firebase from '../../../firebase';
import photo from '../../../assets/images/doctor_1.jpg';

class Settings extends Component {

  componentDidMount() {

  }

  onPhotoUpload = () => {
    let file = document.getElementById('input').files[0]
    let storage = firebase.storage()
    let storageRef = storage.ref()
    let uniqueFileName = new Date().getTime().toString()
    let uploadTask = storageRef.child('images/' + uniqueFileName).put(file)

    uploadTask.on('state_changed', () => {
      uploadTask.snapshot.ref.getDownloadURL()
        .then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
    });

  }

  render() {

    return (
      <>
        <input type="file" id="input"></input>
        <button onClick={this.onPhotoUpload}>Upload photo</button>
      </>
    )
  }
}

export default Settings






// import React, { Component } from 'react';

// import firebase from '../../../firebase';
// import styles from './Settings.module.scss'

// class Settings extends Component {
//   state = {
//     imageUrl: ''
//   }

//   componentDidMount() {
//     let storage = firebase.storage()
//     let storageRef = storage.ref()
//     let imageRef = storageRef.child('doctor_4.jpg')
//     imageRef.getDownloadURL()
//       .then((url) => {
//         this.setState({
//           imageUrl: url
//         })
//       })
//   }

//   render() {

//     return (
//       <>
//         <img className={styles.userPhoto} src={this.state.imageUrl} alt="user"></img>
//       </>
//     )
//   }
// }

// export default Settings