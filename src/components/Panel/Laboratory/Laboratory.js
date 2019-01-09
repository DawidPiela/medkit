import React, { Component } from 'react';

import axios from '../../../axios-instance';

class Laboratory extends Component {
  render() {

    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6I…96Fc9TvoQ'

    const testData =
    {
      test2: {
        "key": "value"
      }
    }

    axios.post('./test.json', testData)
      .then(response => {
        console.log(response)
        console.log(testData)
      })
      .catch(error => {
        console.log(error)
        console.log(testData)
      })

    return (
      <>
        <p>you are in Laboratory Component</p>
      </>
    )
  }
}

export default Laboratory