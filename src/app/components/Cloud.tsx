import React from 'react';
import styles from '../styles/Cloud.module.sass';

type Props = {};

const Cloud = (props: Props) => {
  return (
    <div className={styles.cloudContainer}>
      <div className={`${styles.cloud} ${styles.cloudBase}`}></div>
      <div className={`${styles.cloud} ${styles.cloudBack}`}></div>
      <div className={`${styles.cloud} ${styles.cloudMid}`}></div>
      <div className={`${styles.cloud} ${styles.cloudFront}`}></div>
      <svg width="0" height="0">
        <filter id="filter-base">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="5"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-back">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-mid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-front">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009"
            numOctaves="4"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="50" />
        </filter>
      </svg>
    </div>
  );
};

export default Cloud;
