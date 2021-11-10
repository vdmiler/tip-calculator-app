import React from 'react';
import styles from './Input.module.scss';

const Input = ({
   inputType = 'text',
   inputName = '',
   handleChange = () => { },
   handleKeyPress = () => { },
   inputValue = '',
   inputPlug = null,
   errorClasses = null,
   addClasses = false
}) => {
   return (
      <>
         <input
            type={inputType}
            name={inputName}
            className={`${styles.input} ${errorClasses !== '0' && errorClasses !== '' ? '' : styles._error} ${addClasses ? styles._custom : ''}`}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={inputValue}
            placeholder={inputPlug}
         />
      </>
   );
}

export default Input;