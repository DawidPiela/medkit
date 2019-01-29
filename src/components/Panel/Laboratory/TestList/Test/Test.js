import React, { Component } from 'react';

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
      return <span
        key={data.name}>{data.name}: {data.data}<br /></span>
    })

    return (
      <div>
        <p>data: {testsOutput}</p>
      </div>
    )
  }
}

export default Test