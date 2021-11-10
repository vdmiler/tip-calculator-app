import React from 'react';
import styles from './Titles.module.scss';

const Titles = ({ children }) => <span className={styles.label}>{children}</span>

export default Titles;