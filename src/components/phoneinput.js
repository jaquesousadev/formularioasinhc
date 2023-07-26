import React from 'react';
import styles from '../pages/page.module.css'
import InputMask from 'react-input-mask';

const PhoneInput = ({ value, onChange, name }) => {
    
  return (

    <InputMask

      className={styles.inputcelular}
      name={name}
      mask="(99) 99999-9999"
      placeholder="(00) 00000-0000"
      value={value}
      onChange={onChange}
    
    />
  );
};

export default PhoneInput;
