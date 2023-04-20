import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Img = () => {
  useLayoutEffect(() => {
    const testPath = gsap.timeline();

    testPath.to('.path_test', {
      duration: 2,
      attr: {
        d: 'M 13 9 H 19 V 0 a 1 1 0 0 0 -6 0 H 13 V 9',
      },
    });

    testPath.fromTo(
      '.pos_rel img',
      { scale: 1.2 },
      { scale: 1, duration: 1 },
      '-=2'
    );

    const tm = gsap.timeline();
    tm.fromTo(
      '.animate_img_container',
      { width: 0, paddingTop: 0 },
      { width: 250, paddingTop: '17%', duration: 1.5, ease: 'power4.out' }
    );
    tm.fromTo(
      '.img_absolute',
      { scale: 1.2 },
      { scale: 1, duration: 1, overwrite: true },
      '-=1.5'
    );
  }, []);
  return (
    <div className="flex">
      <div className="pos_rel">
        <img
          width="250"
          height="250"
          src="https://img1.goodfon.ru/wallpaper/nbig/a/69/kartinka-3d-dikaya-koshka.jpg"
          alt=""
        />
        <svg
          className="svg_test"
          width="250"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="13 9 6 6"
        >
          <path
            className="path_test"
            d="M 13 9 H 19 V 20 a 1 1 0 0 0 -6 0 H 13 V 9"
            fill="pink"
          />
        </svg>
      </div>
      <div className="animate_img_container">
        <img
          className="img_absolute"
          width="250"
          height="250"
          src="https://img1.goodfon.ru/wallpaper/nbig/a/69/kartinka-3d-dikaya-koshka.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Img;
