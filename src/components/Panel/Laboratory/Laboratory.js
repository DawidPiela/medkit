import React, { Component } from 'react';

import LaboratoryForm from './LaboratoryForm/LaboratoryForm';
import TestList from './TestList/TestList';

class Laboratory extends Component {
  render() {
    return (
      <>
        <LaboratoryForm />
        <TestList />
      </>
    )
  }
}

export default Laboratory