import { memo, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SplitAnimation = memo(({ text = '' }) => {
  const textRef = useRef();

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const txt = text;

    const data = txt.split('').map((target) => {
      if (target === ' ') {
        console.log(target);
      }
      const span = document.createElement('span');
      span.classList = target === ' ' ? 'letter' : '';
      span.innerHTML = target;
      return span;
    });

    console.log(data);

    const timeLineTxt = gsap.timeline();
    data.forEach((target) => {
      textRef.current.append(target);
      timeLineTxt.fromTo(
        target,
        {
          opacity: 0,
          // rotate: randomNumber(0, 360),
          // x: -100,
          // y: -50,
          scale: 0
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.1,
          ease: 'power1.out',
          // scrollTrigger: {
          //   trigger: '.trigger_split',
          //   toggleActions: 'play none none none',
          //   scrub: true,
          //   // toggleActions: 'play reverse restart complete',
          //   //              onEnter onLeave onEnterBack onLeaveBack
          //   start: 'top 90%',
          //   end: 'top 45%',
          //   markers: true
          // },
        }
      );
    });
  }, []);

  return (
    <div
      className="flexCenter trigger_split"
      ref={textRef}
    ></div>
  );
});

export default SplitAnimation;
