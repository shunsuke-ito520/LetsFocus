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

  // 時間設定のイベント
  const countUps = document.querySelectorAll('.bi-caret-up-fill');

  const countDowns = document.querySelectorAll('.bi-caret-down-fill');

   const countTo2 = (i) => {
    countUps[i].addEventListener('click', () => {
      if(countUps[i].nextElementSibling.textContent === '2') {
        return;
      } else if (countUps[i].nextElementSibling.textContent === '1' && countUps[i + 1].nextElementSibling.textContent >= 4) {
        return;
      } 

      countUps[i].nextElementSibling.textContent++;
    });
   };

   const countTo3 = (i) => {
    countUps[i].addEventListener('click', () => {
      if(countUps[i].nextElementSibling.textContent === '3' && countUps[i - 1].nextElementSibling.textContent === '2') {
        return;
      } else if(countUps[i].nextElementSibling.textContent === '9') {
        return;
      }

      countUps[i].nextElementSibling.textContent++;
    });
   };

   const countTo5 = (i) => {
    countUps[i].addEventListener('click', () => {
      if(countUps[i].nextElementSibling.textContent === '5') {
        return;
      }

      countUps[i].nextElementSibling.textContent++;
    });
   };

   const countTo9 = (i) => {
    countUps[i].addEventListener('click', () => {
      if(countUps[i].nextElementSibling.textContent === '9') {
        return;
      }

      countUps[i].nextElementSibling.textContent++;
    });
   };

   countTo2(0);
   countTo3(1);
   countTo5(2);
   countTo9(3);
   countTo2(4);
   countTo3(5);
   countTo5(6);
   countTo9(7);
   countTo9(8);
   countTo9(9);
   countTo2(10);
   countTo3(11);
   countTo5(12);
   countTo9(13);

  //  作業時間設定時に自動的にプレイ画面の残り時間も合わせる
  const playTime = document.querySelector('.playtime h1');
  
  countDowns.forEach((countDown) => {
    countDown.addEventListener('click', () => {
      if(countDown.previousElementSibling.textContent === '0') {
        return;
      } 
      countDown.previousElementSibling.textContent--;
      playTime.textContent = `${countUps[0].nextElementSibling.textContent}${countUps[1].nextElementSibling.textContent}:${countUps[2].nextElementSibling.textContent}${countUps[3].nextElementSibling.textContent}:00`;
    });
  });
  
  countUps.forEach((countUp) => {
    countUp.addEventListener('click', () => {
      playTime.textContent = `${countUps[0].nextElementSibling.textContent}${countUps[1].nextElementSibling.textContent}:${countUps[2].nextElementSibling.textContent}${countUps[3].nextElementSibling.textContent}:00`;
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
