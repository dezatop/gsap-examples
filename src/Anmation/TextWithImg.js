import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TextWithImg = () => {
  const h1 = useRef();
  const refImg = useRef();
  const mouseEnter = (e) => {
    gsap.to(refImg.current, { opacity: 1, duration: 0.5 });
  };
  const onMouseLeave = (e) => {
    gsap.to(refImg.current, { opacity: 0, duration: 0.5 });
  };

  const clickH1 = () => {
    gsap.to(h1.current, {
      x: 1000,
      duration: 2,
      ease: 'bounce.in',
      onComplete: () => {
        h1.current.remove();
      },
    });
  };

  useEffect(() => {
    gsap.from(h1.current, { x: 300, duration: 1, ease: 'bounce.out' });
  }, []);

  return (
    <div className="relative">
      <h1
        onClick={clickH1}
        ref={h1}
        className="h1_hover"
        onMouseLeave={onMouseLeave}
        onMouseEnter={mouseEnter}
      >
        Hover me
      </h1>
    </div>
  );
};

export default TextWithImg;
