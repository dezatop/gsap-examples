import {useLayoutEffect, useRef} from "react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

const dataCount = {
  num: 0
}

const Counter = ({num = 0, duration = 5}) => {
  const refCounter = useRef()

  const counterUpdate = (value) => {
    refCounter.current.textContent = Math.trunc(value)
  }

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(dataCount, {
      num,
      duration,
      scrollTrigger: '.counter',
      onUpdate: () => {
        counterUpdate(dataCount.num)
      }
    })
  }, [])

  return (
    <div ref={refCounter} className='counter'>0</div>
  );
};

export default Counter;