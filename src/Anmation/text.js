import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import EasePack from 'gsap/EasePack';

const TextAnimation = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin, EasePack);

    const timeline = gsap.timeline();
    timeline
      .fromTo(
        '.text_bottom',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power1.out' }
      )
      .fromTo(
        '.text_left',
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power4.out' },
        '-=0.7'
      )
      .fromTo(
        '.text_right',
        { opacity: 0, x: 500 },
        { opacity: 1, x: 0, duration: 1, ease: 'power4.out' },
        '-=0.7'
      )
      .fromTo(
        '.text_top',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
        '-=0.7'
      );

    gsap.to('.animation_txt', {
      duration: 2,
      text: {
        value: 'Success',
        newClass: 'class2',
        delimiter: '',
      },
    });
  }, []);

  return (
    <div>
      <div className="txt_wrapper">
        <div>
          <h2 className="text_bottom">
            1111Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam asperiores, aut delectus
          </h2>
          <h2 className="text_left">
            2222Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam asperiores, aut delectus
          </h2>
        </div>
        <div>
          <h2 className="text_top">
            3333Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam asperiores, aut delectus
          </h2>
          <h2 className="text_right">
            4444Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam asperiores, aut delectus
          </h2>
        </div>
      </div>
      <h2 className="animation_txt">LOADING</h2>
    </div>
  );
};

export default TextAnimation;
