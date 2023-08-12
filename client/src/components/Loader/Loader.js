import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LoaderCss from './Loader.module.css';
import logo from './Frame.svg';

const Preloader = () => {
  const circlesRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();

  useEffect(() => {
    // Select the circle elements using React Refs
    const circles = circlesRef.current;
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;

    // Create a timeline for the logo animation
    const logoTl = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
    // Create a timeline for the heading animation
    const headingTl = gsap.timeline();
    // Create a timeline for the subheading animation
    const subHeadingTl = gsap.timeline();

    // Animation settings
    const animationDuration = 0.5;
    const staggerDuration = 0.2;

    // Logo animation
    logoTl.to(circles, {
      opacity: 1,
      duration: animationDuration,
      stagger: staggerDuration,
      repeat: 1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Heading animation
    headingTl.fromTo(
      heading,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, duration: 0.5, delay: 1 }
    );

    // Subheading animation
    subHeadingTl.fromTo(
      subHeading,
      { opacity: 0, x: 300 },
      { opacity: 1, x: 0, duration: 0.5, delay: 2 }
    );
  }, []);

  return (
    <div className={LoaderCss.preloader}>
      <div className={LoaderCss.heading} ref={headingRef}>
        <h1>
          Google <span style={{ color: 'green' }}> Developer </span>
          <span style={{ color: 'blue' }}> Students </span>
          <span style={{ color: 'red' }}> Clubs </span>
        </h1>
      </div>
      <div className={LoaderCss.subheading} ref={subHeadingRef}>
        <h3>The LNM Institute of Information Technology</h3>
      </div>
      <img src={logo} className={LoaderCss.logo} alt="Logo" ref={circlesRef} />
      <div className={`${LoaderCss.circle} ${LoaderCss.circle1}`}></div>
      <div className={`${LoaderCss.circle} ${LoaderCss.circle2}`}></div>
      <div className={`${LoaderCss.circle} ${LoaderCss.circle3}`}></div>
      <div className={`${LoaderCss.circle} ${LoaderCss.circle4}`}></div>
      <div className={`${LoaderCss.circle} ${LoaderCss.circle5}`}></div>
      <div className={`${LoaderCss.circle} ${LoaderCss.circle6}`}></div>
    </div>
  );
};

export default Preloader;
