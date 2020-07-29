import React from 'react';
import styles from './Title.module.css';

const Title = () => {
    return (
      <p className={styles.titlesList}>
        <h3 className={styles.titleDate}>ДАТА</h3>
        <h3 className={styles.titleDescription}>ОПИСАНИЕ</h3>
        <h3 className={styles.titleCategory}>КАТЕГОРИЯ</h3>
        <h3 className={styles.titleSumm}>СУММА</h3>
      </p>
    );
};

export default Title;