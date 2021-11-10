import React from 'react';
import styles from './Button.module.scss';

const Button = ({
   type = 'button',
   percent = '',
   handleClick = () => { },
   addClasses = false,
   activeClass = false,
   disabled = false,
   children,
}) => {
   return (
      <>
         <button type={type} className={`${styles._btn} ${addClasses ? styles.reset : ''} ${activeClass ? styles._active : ''}`} data-percent={percent} disabled={disabled} onClick={handleClick}>
            {children}
         </button>
      </>
   );
}

export default Button;