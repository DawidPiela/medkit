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

export const message = {
  elementType: 'textarea',
  elementConfig: {
    type: 'textarea',
    placeholder: 'Please type description of your disease'
  },
  value: '',
  validation: {
    required: true
  },
  valid: false,
  touched: false
}

export const selectDoctors = {
  elementType: 'select',
  elementConfig: {
    options: [
      { value: 'JQ1', displayValue: 'Joan Quinn' },
      { value: 'VP1', displayValue: 'Vince Patel' },
      { value: 'SR1', displayValue: 'Susan Reily' },
      { value: 'MJ1', displayValue: 'Mike Jones' }
    ]
  },
  value: 'JQ1',
  validation: {},
  valid: true
}