import { useLayoutEffect } from 'react';
import TextAnimation from '../Anmation/text';
import SplitAnimation from '../Anmation/splitAnimation';
import Img from '../Anmation/img';
import Counter from '../Anmation/counter';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextWithImg from '../Anmation/TextWithImg';
import ImgList from '../components/ImgList';

const Main = () => {
  let getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.full_height').forEach((section, i) => {
      if (!i) {
        section.style.backgroundPosition = `50% 0px`;
      }
      gsap.fromTo(
        section,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : '50% 0px',
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: () => (i ? 'top bottom' : 'top top'),
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: 'gray',
          backgroundImage:
            'url(https://funart.pro/uploads/posts/2021-03/1617052134_40-p-oboi-krasivie-vidi-prirodi-41.jpg)',
        }}
        className="full_height full_heightList"
      >
        <TextWithImg />
        <TextAnimation />
      </div>
      {/*<FastText/>*/}
      <div
        style={{
          backgroundColor: '#000bff4f',
          backgroundImage:
            'url(https://img.freepik.com/free-photo/beautiful-shot-of-a-small-village-surrounded-by-a-lake-and-snowy-hills_181624-37802.jpg?w=2000)',
        }}
        className="full_height"
      >
        <ImgList />
      </div>
      <div
        style={{ backgroundColor: '#620080' }}
        className="full_height full_heightList"
      >
        <div className="grid_container">
          <div className="conter_wp">
            <SplitAnimation text="Front end developer" />
            <Counter
              num={999}
              duration={1}
            />
          </div>
          <div className="conter_wp">
            <SplitAnimation text="Devops" />
            <Counter
              num={666}
              duration={2}
            />
          </div>
          <div className="conter_wp">
            <SplitAnimation text="UI/UX" />
            <Counter
              num={555}
              duration={3}
            />
          </div>
        </div>
      </div>
      <TextWithImg />
      <Img />
    </div>
  );
};

export default Main;
