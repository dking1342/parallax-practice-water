'use client';
import { useEffect, useState } from 'react';

type Fn = (
  element: string,
  start: number,
  speed: number,
  left?: number,
  right?: number
) => { top: number; leftPos: number; rightPos: number };

const useParallaxVertical: Fn = (
  element: string,
  start: number,
  speed: number,
  left?: number,
  right?: number
) => {
  const [top, setTop] = useState(start);
  const [leftPos, setLeftPos] = useState(left);
  const [rightPos, setRightPos] = useState(right);
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const innerWidth = window.innerWidth;
    const el = document.querySelector(`#${element}`) as HTMLDivElement;
    const elTop = el.getBoundingClientRect().top;

    if (left && right) {
      const section = el.parentElement!.parentElement as HTMLElement;
      const sectionTop = section.getBoundingClientRect().top;
      setTop(sectionTop * speed);
    } else if (left && !right) {
      const startingPosition = innerWidth * left;
      setLeftPos(startingPosition - elTop);
      setTop(0);
    } else if (right && !left) {
      const startingPosition = innerWidth * right;
      setRightPos(startingPosition - elTop);
      setTop(0);
    } else {
      setTop(scroll * speed + start);
    }
  }, [scroll]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return {
    top,
    leftPos: left ? leftPos! : 0,
    rightPos: right ? rightPos! : 0,
  };
};

export default useParallaxVertical;
