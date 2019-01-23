import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as elements from './settingsElements';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import * as actions from '../../../../store/actions/index';

class SettingsForm extends Component {
  componentDidMount() {
    this.props.onInitUserData(this.props.token, this.props.userId)
  }

  state = {
    controls: {
      firstName: elements.firstName,
      lastName: elements.lastName
    },
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

  submitHandler = event => {
    event.preventDefault();

    const userData = {
      firstName: this.state.controls.firstName.value,
      lastName: this.state.controls.lastName.value,
    }

    this.props.onPatchUserData(
      this.props.userId,
      userData
    )
  };

  render() {
    const userData = { ...this.props.userData }
    const user = { ...userData[this.props.userId] }
    // this.state.controls.firstName.value = user.firstName
    // this.state.controls.lastName.value = user.lastName

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
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType='Success' disabled={!this.state.formIsValid}>Save all settings</Button>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user.userData,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitUserData: (token, userId) => dispatch(actions.initUserData(token, userId)),
    onPatchUserData: (userId, userData) => dispatch(actions.patchUserData(userId, userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm)