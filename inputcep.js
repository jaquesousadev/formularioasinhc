import React from 'react';
import styles from '../pages/page.module.css'
import InputMask from 'react-input-mask';

const CEPInput = ({ value, onChange, name }) => {
  return (
    <InputMask
        className={styles.inputcep} 
        name={name}
        mask="99999-999"
        placeholder="_____-___"
        value={value}
        onChange={onChange}
    />
  );
};

export default CEPInput;
