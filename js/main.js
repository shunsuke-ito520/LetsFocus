'use strict';

{
  const title = document.getElementById('title');
  const timer = document.getElementById('timer');
  const bgm = document.getElementById('bgm');
  const play = document.getElementById('play');
  const clickHere = document.getElementById('clickHere');
  const next1 = document.getElementById('next1');
  const next2 = document.getElementById('next2');
  const prev1 = document.getElementById('prev1');
  const prev2 = document.getElementById('prev2');
  const prev3 = document.getElementById('prev3');
  // const nextBtns = document.querySelectorAll('.bi-arrow-down-circle-fill');
  const windowHeight = document.documentElement.clientHeight;
  const toggleBtn = document.getElementById('toggleBtn');
  const youtube = document.querySelector('iframe');

  title.style.height = `${windowHeight - 64}px`;
  timer.style.height = `${windowHeight}px`;
  bgm.style.height = `${windowHeight}px`;
  play.style.height = `${windowHeight - 64}px`;

  clickHere.addEventListener('click', () => {
    window.scrollTo({
      top: windowHeight,
      behavior: 'smooth'
    });
  });

  next1.addEventListener('click', () => {
    window.scrollTo({
      top: windowHeight * 2,
      behavior: 'smooth'
    });
  });

  next2.addEventListener('click', () => {
    window.scrollTo({
      top: windowHeight * 3,
      behavior: 'smooth'
    });
  });
  
  // nextBtns.forEach((next) => {
  //   next.addEventListener('click', () => {
  //     window.scrollTo({
  //           top: windowHeight,
  //           behavior: 'smooth'
  //         });
  //   });
  //   i++;
  // });

  prev1.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  prev2.addEventListener('click', () => {
    window.scrollTo({
      top: windowHeight * 1,
      behavior: 'smooth'
    });
  });

  prev3.addEventListener('click', () => {
    window.scrollTo({
      top: windowHeight * 2,
      behavior: 'smooth'
    });
  });

  toggleBtn.addEventListener('change', () => {
    if(youtube.classList.contains('appear')){
      youtube.classList.remove('appear');
      youtube.classList.add('hidden');
    } else {
      youtube.classList.add('appear');
      youtube.classList.remove('hidden');
    }
  });

  const playbtn = document.querySelector('.bi-play-circle');
  const pausebtn = document.querySelector('.bi-pause-circle');

  playbtn.addEventListener('click', () => {
    playbtn.classList.add('pause');
    pausebtn.classList.remove('pause');
  });

  pausebtn.addEventListener('click', () => {
    playbtn.classList.remove('pause');
    pausebtn.classList.add('pause');
  });

}
