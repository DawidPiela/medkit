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
      let icon
      switch (data.name) {
        case 'Afternoon': icon =
          (<span><i
            className='fas fa-cloud-moon'
            aria-hidden='true'></i>
          </span>)
          break;
        case 'Morning': icon =
          (<span><i
            className='fas fa-sun'
            aria-hidden='true'></i>
          </span>)
          break
        case 'Evening': icon =
          (<span><i
            className='fas fa-moon'
            aria-hidden='true'></i>
          </span>)
          break
        default: icon = null
      }
      return <span key={data.name}>{data.name}: {icon} {data.data}<br /></span>
    })

    return (
      <>
        <p>{prescriptionsOutput}</p>
      </>
    )
  }
}

export default Prescription