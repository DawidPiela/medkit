import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';

import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import * as elements from './laboratoryElements';
import * as actions from '../../../../store/actions/index';
import TestInfo from './testInfo.json';

class LaboratoryForm extends Component {
  state = {
    controls: {
      selectTest: elements.selectTest
    },
    date: new Date()
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: true,
        touched: true
      }
    };

    this.setState({ controls: updatedControls });
  };

  calendarChangedHandler = (date) => {
    this.setState({ date: date })
  }

  submitHandler = event => {
    event.preventDefault();

    const laboratoryData = {
      date: this.state.date,
      testId: this.state.controls.selectTest.value
    }

    this.props.onInitLaboratoryData(
      this.props.userId,
      laboratoryData,
      this.props.token
    )
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let testInfo = JSON.stringify(TestInfo[this.state.controls.selectTest.value])
      .replace(/"/g, "");

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    return (
      <>
        <form onSubmit={this.submitHandler}>
          {form}
          <p>{testInfo}</p>
          <Calendar onChange={date => this.calendarChangedHandler(date)} value={this.state.date} />
          <Button btnType='Success' >SUBMIT</Button>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitLaboratoryData: (userId, laboratoryData, token) =>
      dispatch(actions.initLaboratoryData(userId, laboratoryData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaboratoryForm)