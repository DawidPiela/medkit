import React, { Component } from 'react';
import Moment from 'react-moment';

import styles from './Test.module.scss';

class Test extends Component {
  render() {
    const tests = []

    for (let dataName in this.props.laboratoryData) {
      tests.push(
        {
          name: dataName,
          data: this.props.laboratoryData[dataName]
        }
      )
    }

    const testsOutput = tests.map(data => {
      switch (data.name) {
        case 'date': return <div
          key={data.name}
          className={styles.date}>
          <span>Date:<br /></span>
          <p><Moment format="YYYY/MM/DD">{data.data}</Moment></p>
        </div>
        case 'testId':
          switch (data.data) {
            case 'test_1': return <div
              key={data.name}
              className={styles.testId}>
              <span>Your Test:<br /></span>
              <p>Blood Test</p>
            </div>
            case 'test_2': return <div
              key={data.name}
              className={styles.testId}>
              <span>Your Test:<br /></span>
              <p>Ultrasound</p>
            </div>
            case 'test_3': return <div
              key={data.name}
              className={styles.testId}>
              <span>Your Test:<br /></span>
              <p>Eye examination</p>
            </div>
            case 'test_4': return <div
              key={data.name}
              className={styles.testId}>
              <span>Your Test:<br /></span>
              <p>Spirometry</p>
            </div>
            default: return null
          }
        default: return null
      }
    })

    return (
      <div className={styles.listComponent}>
        {testsOutput}
      </div>
    )
  }
}

export default Test