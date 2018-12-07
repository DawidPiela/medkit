export const firstName = {
  elementType: 'input',
  elementConfig: {
    type: 'name',
    placeholder: 'First Name'
  },
  value: '',
  validation: {
    required: true
  },
  valid: false,
  touched: false
}

export const lastName = {
  elementType: 'input',
  elementConfig: {
    type: 'name',
    placeholder: 'Last Name'
  },
  value: '',
  validation: {
    required: true
  },
  valid: false,
  touched: false
}

export const email = {
  elementType: 'input',
  elementConfig: {
    type: 'email',
    placeholder: 'Mail Address'
  },
  value: '',
  validation: {
    required: true,
    isEmail: true
  },
  valid: false,
  touched: false
}

export const password = {
  elementType: 'input',
  elementConfig: {
    type: 'password',
    placeholder: 'Password'
  },
  value: '',
  validation: {
    required: true,
    minLength: 6
  },
  valid: false,
  touched: false
}