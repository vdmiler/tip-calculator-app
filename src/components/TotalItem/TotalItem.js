import React from 'react';
import styles from './TotalItem.module.scss';
import { formattingNumbers } from '../../functions';

const TotalItem = ({ cls = '', title, totalNumber }) => {
   return (
      <div className={`${styles.wrapp} ${cls == 'amount' ? styles.amount : ''}`}>
         <div className={styles.headlines}>
            <p className={styles.line}>
               {title}
            </p>
            <p className={styles.line}>
               / person
            </p>
         </div>
         <div className={styles.numbers}>
            ${totalNumber === 0 ? '0.00' : formattingNumbers(totalNumber)}
         </div>
      </div>
   );
}

export default TotalItem;