import React, { Component } from 'react';

class Appointment extends Component {
  render() {

    const appointments = []

    for (let dataName in this.props.appointmentData) {
      appointments.push(
        {
          name: dataName,
          data: this.props.appointmentData[dataName]
        }
      )
    }

    const appointmentsOutput = appointments.map(data => {
      return <span
        key={data.name}>{data.name}: {data.data}<br /></span>
    })

    return (
      <div>
        <p>data: {appointmentsOutput}</p>
      </div>
    )
  }
}

export default Appointment