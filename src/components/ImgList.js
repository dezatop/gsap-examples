import React, {useLayoutEffect} from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
import Tilt from 'react-parallax-tilt';
import gsap from "gsap";

const ImgList = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tm = gsap.timeline({
      scrollTrigger: {
        trigger: '.grid_images',
        scrub: true,
        toggleActions: 'play none none none',
        start: 'top 80%',
        end: 'top 45%',
      }
    })

    tm.fromTo('.img_right', { x: 1000}, { x: 0, width: 300, rotate: 0, duration: 2})
    tm.fromTo('.img_left', {  x: -10000 }, { x: 0, width: 300, rotate: 0, duration: 2})
    tm.fromTo('.img_center', {y: -1000 }, {height: 400, y: 0, rotate: 0, duration: 2})

    gsap.utils.toArray(".img_container_animate img").forEach(el => {
      el.onmousedown = () => {
        gsap.fromTo(el, {scale: 1}, {scale: 1.1})
      }

      el.onmouseup = () => {
        gsap.fromTo(el, {scale: 1.1}, {scale: 1})
      }
    })
  }, [])

  return (
    <div className='grid_images'>
      <Tilt>
        <div className='img_left img_container_animate'>
          <img width='400' height='400' src="https://zooclub.org.ua/uploads/2022/07/28/gimalayskiy-surok9.jpg" alt=""/>
        </div>
      </Tilt>
      <Tilt>
        <div className='img_center img_container_animate'>
          <img width='400' height='400' src="https://cs13.pikabu.ru/images/big_size_comm/2021-03_4/1616151554143564658.png" alt=""/>
        </div>
      </Tilt>
      <Tilt>
        <div className='img_right img_container_animate'>
          <img width='400' height='400' src="https://znaj.ua/images/2019/05/17/p9svyfYzZKZJTbCeBhHCFdWM9DQ47BH6hbIuL39H.jpeg" alt=""/>
        </div>
      </Tilt>
    </div>
  );
};

export default ImgList;