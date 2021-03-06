import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './Auth.module.scss';
import Header from '../../components/HomePage/Header/Header';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import * as elements from './authElements';

class Auth extends Component {
  state = {
    controls: {
      firstName: elements.firstName,
      lastName: elements.lastName,
      email: elements.email,
      password: elements.password
    },
    isSignup: true,
    formIsValid: false
  };

  componentDidMount() {
    if (this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    }
  }

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

  submitHandler = event => {
    event.preventDefault();

    const submitParams = {
      firstName: this.state.controls.firstName,
      lastName: this.state.controls.lastName
    }

    let returnNullIfUndefined = (submitParam = '') => submitParam.value

    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup,
      returnNullIfUndefined(submitParams.firstName),
      returnNullIfUndefined(submitParams.lastName)
    );
  };

  switchAuthModeContentHandler = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      };
    });
    if (this.state.isSignup) {
      this.setState({
        controls: {
          email: elements.email,
          password: elements.password
        }
      })
    } else {
      this.setState({
        controls: {
          firstName: elements.firstName,
          lastName: elements.lastName,
          ...this.state.controls
        }
      });
    }
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      };
    });
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

    if (this.props.loading) {
      form = <Spinner />;
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p className={styles.error}>{this.props.error.message}</p>;
    }

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div>
        <Header />
        {authRedirect}
        <div className={styles.form}>
          <form onSubmit={this.submitHandler}>
            {errorMessage}
            <p>
              {this.state.isSignup
                ? 'Please complete the form below to create your account.'
                : 'Welcome back! Please log in to your account.'}
            </p>
            {form}
            <Button btnType='Success' disabled={!this.state.formIsValid}>SUBMIT</Button>
          </form>
          <Button clicked={this.switchAuthModeContentHandler} btnType='Danger'>
            SWITCH TO {this.state.isSignup ? 'LOG IN' : 'SIGN UP'}
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup, firstName, lastName) =>
      dispatch(actions.auth(email, password, isSignup, firstName, lastName)),
    onSetAuthRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath('/panel/dashboard'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
