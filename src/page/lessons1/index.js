import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import st from './index.module.css';

const Lessons1 = () => {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const text = useRef();
  const textTop = useRef();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    // const timeline = gsap.timeline();
    // gsap.to(box1.current, {x: 300})
    // gsap.from(box1.current, { x: 300, ease: 'bounce.inOut' });
    // gsap.fromTo(
    //   box1.current,
    //   { x: 0, rotate: 180, backgroundColor: 'green'},
    //   {
    //     x: 300,
    //     rotate: 0,
    //     yoyo: true,
    //     repeat: -1,
    //     delay: 6,
    //     backgroundColor: 'red'
    //   }
    // );

    const tm = gsap.timeline();
    tm.to(box1.current, { y: 300, duration: 3 }).to(
      box2.current,
      { y: 300, duration: 3 },
      '+=1'
    );

    gsap.to(text.current, {
      duration: 3,
      onComplete: () => {
        text.current.classList.add('class2');
      },
      text: {
        value: 'Lorem.',
      },
    });

    gsap.fromTo(
      textTop.current,
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: textTop.current,
          // toggleActions: 'restart none restart none',
          // // toggleActions: 'play reverse restart complete',
          // //                 onEnter onLeave onEnterBack onLeaveBack
          scrub: true,
          start: 'top 100%',
          // end: 'bottom 200%',
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className={st.wrapper}>
        <div>
          <div
            ref={box1}
            className={`${st.miniBox} selectorTest`}
          />

          <h2
            ref={text}
            className={st.title}
          ></h2>
          <div className={st.flex}>
            <div>
              <div className={st.miniBox} />
              <div className={st.miniBox} />
              <div className={st.miniBox} />
            </div>
            <img
              width="250"
              height="250"
              src="https://i.pinimg.com/736x/73/cc/e4/73cce4210ab89615fb57149f09d15a7e.jpg"
              alt="img"
            />
          </div>
        </div>
        <div>
          <div className={st.flex}>
            <div
              ref={box1}
              className={st.miniBox}
            />
            <div
              ref={box2}
              className={st.miniBox}
            />
            <div
              ref={box3}
              className={st.miniBox}
            />
            <div
              ref={box4}
              className={st.miniBox}
            />
          </div>
          <p className={st.txt}>Text</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: 'greenyellow' }}
        className={st.wrapper}
      >
        <div
          ref={textTop}
          style={{ width: '300px' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          doloremque facilis porro rem suscipit? Fugiat impedit rerum sed vel
          veniam. Accusantium ad aperiam beatae doloribus incidunt ipsa
          necessitatibus nihil quia!
        </div>
      </div>
      <div className={st.wrapper}>

      </div>
    </div>
  );
};

export default Lessons1;
