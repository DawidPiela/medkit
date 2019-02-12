import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import styles from './Prescription.module.scss';

class Prescription extends Component {

  printDocument() {
    const input = document.getElementById('divToPrint')
    html2canvas(input)
      .then((canvas) => {
        const width = (input.offsetWidth) / 2
        const height = (input.offsetHeight) / 2
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [width, height]
        })
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
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
          <span>
            <i className='fas fa-pills' aria-hidden='true'></i>
          </span>
          <p>{data.name}: {data.data}</p>
        </div>
        case 'Duration': return <div
          key={data.name}
          className={styles.duration}>
          <p>{data.name}: {data.data}</p>
        </div>
        case 'Afternoon': frequencyDiv.push(<div
          key={data.name}
          className={styles.afternoon}><span>
            <i className='fas fa-cloud-moon' aria-hidden='true'></i>
          </span>
          <p>{data.name}: {data.data}</p><br /></div>); return null;
        case 'Morning': frequencyDiv.push(<div
          key={data.name}
          className={styles.morning}><span>
            <i className='fas fa-sun' aria-hidden='true'></i>
          </span>
          <p>{data.name}: {data.data}</p><br /></div>); return null;
        case 'Evening': frequencyDiv.push(<div
          key={data.name}
          className={styles.evening}><span>
            <i className='fas fa-moon' aria-hidden='true'></i>
          </span>
          <p>{data.name}: {data.data}</p><br /></div>); return null;
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
