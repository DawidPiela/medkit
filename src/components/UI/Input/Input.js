import React from 'react';

import styles from './Input.module.scss';

const input = (props) => {
  let inputElement = null;
  const inputStyles = [styles.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(styles.Invalid);
  }

  if (props.elementType === 'textarea') {
    inputElement = <textarea
      className={inputStyles.join(' ')}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed} />;
  } else if (props.elementType === 'select') {
    inputElement = (
      <select
        className={inputStyles.join(' ')}
        value={props.value}
        onChange={props.changed}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    );
  } else {
    inputElement = <input
      className={inputStyles.join(' ')}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed} />;
  }

  return (
    <>
      <div className={styles.Input}>
        <label className={styles.Label}>{props.label}</label>
        {inputElement}
      </div>
    </>
  );

};

export default input;