import React, {useLayoutEffect} from 'react';
import gsap from "gsap";

const FastText = () => {
  useLayoutEffect(() => {
    const container = document.querySelector('.demo')
    const _sentenceEndExp = new RegExp(/(\.|\?|!)$/g)
    function machineGun(text) {
      gsap.to(container, {height: 300, duration: 1})
      let words = text.split(" "),
        tl = gsap.timeline({delay:0.6, repeatDelay:4}),
        wordCount = words.length,
        time = 0,
        word, element, duration, isSentenceEnd, i;

      for(i = 0; i < wordCount; i++){
        word = words[i];
        isSentenceEnd = _sentenceEndExp.test(word);
        const elem = document.createElement('h3')
        elem.innerHTML = `<h3>${word}</h3>`
        container.append(elem)
        element = elem
        duration = Math.max(0.5, word.length * 0.08);
        if (isSentenceEnd) {
          duration += 0.6;
        }
        gsap.set(element, {autoAlpha:0, scale:0, z:0.01});
        tl.to(element, duration, {scale:1.2,  ease:"slow(0.25, 0.9)"}, time)
          .to(element, duration, {autoAlpha:1, ease:"slow(0.25, 0.9, true)", opacity: 0}, time)
        tl.to(element, duration, {opacity: 0, ease:"slow(0.25, 0.9, true)"}, time + 0.5)
        time += duration - 0.05;
        if (isSentenceEnd) {
          time += 0.6;
        }
      }
    }
    machineGun("These words are constantly animating in your face to suck you in and leave you hanging for what comes next. Can you handle the awesomeness? Or are you left quivering in fear? It's only text, silly. Longer words stay on the screen for a greater duration. Each sentence ends with a dramatatic pause. Yes, that pause. The End");
  }, [])
  return (
    <div className='demo'></div>
  );
};

export default FastText;