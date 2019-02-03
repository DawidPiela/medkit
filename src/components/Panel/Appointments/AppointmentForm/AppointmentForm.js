import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';

import styles from './AppointmentForm.module.scss';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import * as elements from './appointmentElements';
import * as actions from '../../../../store/actions/index';

class AppointmentForm extends Component {
  state = {
    controls: {
      firstName: elements.firstName,
      lastName: elements.lastName,
      email: elements.email,
      message: elements.message,
      selectDoctors: elements.selectDoctors
    },
    date: new Date(),
    formIsValid: false
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };

    let formIsValid = true
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid
    }

    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };

  calendarChangedHandler = (date) => {
    this.setState({ date: date })
  }

  submitHandler = event => {
    event.preventDefault();

    const appointmentData = {
      firstName: this.state.controls.firstName.value,
      lastName: this.state.controls.lastName.value,
      email: this.state.controls.email.value,
      message: this.state.controls.message.value,
      date: this.state.date,
      doctorId: this.state.controls.selectDoctors.value
    }

    this.props.onInitAppointmentData(
      this.props.userId,
      appointmentData,
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
        <form onSubmit={this.submitHandler} className={styles.form}>
          {form}
          <Calendar
            onChange={date => this.calendarChangedHandler(date)}
            value={this.state.date}
            className={styles.calendar}
            locale="en-GB" />
          <Button btnType='Success' disabled={!this.state.formIsValid}>SUBMIT</Button>
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
    onInitAppointmentData: (userId, appointmentData, token) =>
      dispatch(actions.initAppointmentData(userId, appointmentData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)