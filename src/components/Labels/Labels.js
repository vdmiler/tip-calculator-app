import React from 'react';
import styles from './Labels.module.scss';

const Labels = ({ label }) => <span className={styles.label}>{label}</span>

export default Labels;