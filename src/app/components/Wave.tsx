import React from 'react';
import styles from '../styles/Wave.module.sass';

type Props = {
  background: string;
  timing: string;
  z: number;
};

const Wave = ({ background, timing, z }: Props) => {
  return (
    <div
      className={styles.wave}
      style={{ background, animationTimingFunction: timing, zIndex: z }}
    ></div>
  );
};

export default Wave;
