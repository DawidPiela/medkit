import React, { Component } from 'react';

class Prescription extends Component {
  render() {
    const prescriptions = []
    for (let dataName in this.props.prescriptionData) {
      prescriptions.push(
        {
          name: dataName,
          data: this.props.prescriptionData[dataName]
        }
      )
    }

    const prescriptionsOutput = prescriptions.map(data => {
      return <span key={data.name}>{data.name}: {data.data}<br /></span>
    })

    return (
      <>
        <p>data: {prescriptionsOutput}</p>
      </>
    )
  }
}

export default Prescription