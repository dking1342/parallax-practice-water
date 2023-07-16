import React from 'react';
import styles from './styles/Home.module.sass';
import Cloud from './components/Cloud';
import Link from 'next/link';
import ParallaxContainer from './components/ParallaxContainer';
import Coral from './components/Coral';
import Fish from './components/Fish';
import Bubble from './components/Bubble';
import Pirate from './components/Pirate';
import Wave from './components/Wave';

type Props = {};

const page = (props: Props) => {
  return (
    <main className={styles.main}>
      <section className={`${styles.section} ${styles.section1}`}>
        <ParallaxContainer element="hero" start={0} speed={1}>
          <div className={styles.heroContainer}>
            <h1>Hero Title</h1>
            <Link href={'#'} className={styles.heroLink}>
              CTA
            </Link>
          </div>
        </ParallaxContainer>
        <Wave
          background="linear-gradient(180deg, #8aeed5,#63b9db)"
          timing="cubic-bezier( 0.5, 0.35, 0.7, 0.53)"
          z={-5}
        />
        <Wave
          background="linear-gradient(180deg, #63b9db,#4479e1)"
          timing="cubic-bezier( 0.36, 0.85, 0.3, 0.73)"
          z={-4}
        />
        <Wave
          background="linear-gradient(180deg, #4479e1,#2645e0)"
          timing="cubic-bezier( 0.6, 0.15, 0.63, 0.53)"
          z={-3}
        />
        <Wave
          background="linear-gradient(180deg, #2645e0,#071eed)"
          timing="cubic-bezier( 0.1, 0.45, 0.7, 0.53)"
          z={-2}
        />
        <Wave
          background="linear-gradient(180deg, #071eed,#4479e1)"
          timing="cubic-bezier( 0.8, 0.5, 0.2, 0.83)"
          z={-1}
        />
        <ParallaxContainer element="cloud" start={0} speed={0.25}>
          <Cloud />
        </ParallaxContainer>
        <ParallaxContainer element="sun" start={0} speed={-0.33}>
          <div className={styles.sun}></div>
        </ParallaxContainer>
      </section>
      <section className={`${styles.section} ${styles.section2}`}>
        <h1>section 2</h1>
        <ParallaxContainer
          element="underbg1"
          start={0}
          speed={-0.25}
          left={1}
          right={1}
        >
          <div className={`${styles.bgLayer} ${styles.bgLayer1}`}></div>
        </ParallaxContainer>
        <ParallaxContainer
          element="underbg2"
          start={0}
          speed={-0.15}
          left={1}
          right={1}
        >
          <div className={`${styles.bgLayer} ${styles.bgLayer2}`}></div>
        </ParallaxContainer>
        <ParallaxContainer
          element="underbg3"
          start={0}
          speed={-0.12}
          left={1}
          right={1}
        >
          <div className={`${styles.bgLayer} ${styles.bgLayer3}`}></div>
        </ParallaxContainer>
        <ParallaxContainer element="coral1" start={0} speed={-0.005}>
          <Coral
            bottom="1vh"
            left="0vw"
            width="100px"
            height="100px"
            delay="500ms"
          />
        </ParallaxContainer>
        <ParallaxContainer element="coral2" start={0} speed={-0.0075}>
          <Coral
            bottom="5vh"
            left="20vw"
            width="50px"
            height="50px"
            delay="250ms"
          />
        </ParallaxContainer>
        <ParallaxContainer element="coral2" start={0} speed={-0.0075}>
          <Coral
            bottom="3vh"
            left="40vw"
            width="70px"
            height="70px"
            delay="333ms"
          />
        </ParallaxContainer>
        <ParallaxContainer element="coral2" start={0} speed={-0.0075}>
          <Coral
            bottom="1vh"
            left="90vw"
            width="100px"
            height="100px"
            delay="100ms"
          />
        </ParallaxContainer>
        <ParallaxContainer
          element="fish1"
          start={0}
          speed={-0.5}
          left={1}
          right={1}
        >
          <Fish width="100px" height="100px" top="10vh" left="10vw" />
        </ParallaxContainer>
        <ParallaxContainer
          element="fish2"
          start={0}
          speed={-0.25}
          left={1}
          right={1}
        >
          <Fish width="50px" height="50px" top="5vh" left="30vw" />
        </ParallaxContainer>
        <ParallaxContainer
          element="fish3"
          start={0}
          speed={-0.4}
          left={1}
          right={1}
        >
          <Fish width="75px" height="75px" top="7vh" left="80vw" />
        </ParallaxContainer>
        <ParallaxContainer
          element="bubble1"
          start={0}
          speed={-0.25}
          left={1}
          right={1}
        >
          <Bubble
            top="10vh"
            left="20vw"
            width="50px"
            height="50px"
            delay="1500ms"
          />
        </ParallaxContainer>
        <ParallaxContainer
          element="bubble2"
          start={0}
          speed={-0.15}
          left={1}
          right={1}
        >
          <Bubble
            top="30vh"
            left="60vw"
            width="25px"
            height="25px"
            delay="500ms"
          />
        </ParallaxContainer>
        <ParallaxContainer
          element="bubble3"
          start={0}
          speed={-0.1}
          left={1}
          right={1}
        >
          <Bubble
            top="40vh"
            left="45vw"
            width="45px"
            height="45px"
            delay="1000ms"
          />
        </ParallaxContainer>
        <ParallaxContainer
          element="bubble3"
          start={0}
          speed={-0.5}
          left={1}
          right={1}
        >
          <Bubble
            top="0vh"
            left="85vw"
            width="65px"
            height="65px"
            delay="2000ms"
          />
        </ParallaxContainer>
        <ParallaxContainer
          element="pirate"
          start={0}
          speed={-0.05}
          left={1}
          right={1}
        >
          <Pirate />
        </ParallaxContainer>
      </section>
      <section className={`${styles.section} ${styles.section3}`}>
        <h1>section3</h1>
      </section>
    </main>
  );
};

export default page;
