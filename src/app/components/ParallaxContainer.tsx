'use client';
import React, { ReactNode } from 'react';
import useParallax from '../hooks/useParallax';
import styles from '../styles/ParallaxContainer.module.sass';

type Props = {
  children: ReactNode;
  element: string;
  start: number;
  speed: number;
  left?: number;
  right?: number;
  z?: number;
  x?: number;
  wid?: number;
};

const ParallaxContainer = ({
  children,
  element,
  start,
  speed,
  left,
  right,
  z,
  x,
  wid,
}: Props) => {
  const { top, leftPos, rightPos } = useParallax(
    element,
    start,
    speed,
    left,
    right
  );

  return (
    <div
      style={{
        top: `${top}px`,
        left: `${left && leftPos}px`,
        right: `${right && rightPos}px`,
        transform: `translateZ(${z}px) translateX(${x}%)`,
        width: `${wid && wid}%`,
      }}
      className={styles.layer}
      id={element}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;
