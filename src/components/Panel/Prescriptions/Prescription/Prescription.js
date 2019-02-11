import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import styles from './Prescription.module.scss';

class Prescription extends Component {

  printDocument() {
    const input = document.getElementById('divToPrint')
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF()
        pdf.addImage(imgData, 'JPEG', 0, 0)
        pdf.save("download.pdf")
      })
  }

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

    let frequencyDiv = [];

    const prescriptionsOutput = prescriptions.map(data => {
      switch (data.name) {
        case 'Medicine': return <div
          key={data.name}
          className={styles.medicine}>
          <p>{data.data}</p>
        </div>
        case 'Dose': return <div
          key={data.name}
          className={styles.dose}>
          {data.name}: {data.data}
          <span>
            <i className='fas fa-pills' aria-hidden='true'></i>
          </span>
        </div>
        case 'Duration': return <div
          key={data.name}
          className={styles.duration}>
          <p>{data.name}: {data.data}</p>
        </div>
        case 'Afternoon': frequencyDiv.push(<div
          key={data.name}
          className={styles.afternoon}>{data.name}: <span>
            <i className='fas fa-cloud-moon' aria-hidden='true'></i>
          </span>
          {data.data}<br /></div>); return null;
        case 'Morning': frequencyDiv.push(<div
          key={data.name}
          className={styles.morning}>{data.name}: <span>
            <i className='fas fa-sun' aria-hidden='true'></i>
          </span>
          {data.data}<br /></div>); return null;
        case 'Evening': frequencyDiv.push(<div
          key={data.name}
          className={styles.evening}>{data.name}: <span>
            <i className='fas fa-moon' aria-hidden='true'></i>
          </span>
          {data.data}<br /></div>); return null;
        default: return null
      }
    })

    return (
      <div className={styles.box}>
        <div id="divToPrint" className={styles.mt4}>
          {prescriptionsOutput}
          <div className={styles.frequency}>
            {frequencyDiv}
          </div>
        </div>
        <div className="mb5">
          <button className={styles.pdfButton} onClick={this.printDocument}>PDF</button>
        </div>
      </div>
    )
  }
}

export default Prescription
