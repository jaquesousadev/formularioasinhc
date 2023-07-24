import React from "react";
import InputMask from 'react-input-mask';
import styles from '../pages/page.module.css'

const onlyNumbers = (str) => str.replace(/[^0-9]/g,'');

const MaskedInput = ({ value, onChange, name}) => {
    function handleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                value: event.target.value
            }
        });
    }

    return <InputMask
    
    name={name}
    mask='999.999.999-99' 
    className={styles.inputcpf}
    value={value}
    onChange={onChange}
    />;
    
};

export default MaskedInput;