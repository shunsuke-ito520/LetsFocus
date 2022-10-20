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

  // カラーモードの選択
  const body = document.querySelector('body');
  const black = document.querySelector('.circle-black');
  const white = document.querySelector('.circle-white');
  const red = document.querySelector('.circle-red');
  const green = document.querySelector('.circle-blue');
  const blue = document.querySelector('.circle-green');

  const colorReset = () => {
    body.classList.remove('black-color-mode');
    body.classList.remove('white-color-mode');
    body.classList.remove('red-color-mode');
    body.classList.remove('green-color-mode');
    body.classList.remove('blue-color-mode');
  };

  black.addEventListener('click', () => {
    colorReset();
    body.classList.add('black-color-mode');
  });

  white.addEventListener('click', () => {
    colorReset();
    body.classList.add('white-color-mode');
  });

  red.addEventListener('click', () => {
    colorReset();
    body.classList.add('red-color-mode');
  });

  green.addEventListener('click', () => {
    colorReset();
    body.classList.add('green-color-mode');
  });

  blue.addEventListener('click', () => {
    colorReset();
    body.classList.add('blue-color-mode');
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

  let setPlaytime = ((parseInt(countUps[0].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[1].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[2].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[3].nextElementSibling.textContent, 10))) * 60;

  let setIntervalTime = ((parseInt(countUps[4].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[5].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[6].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[7].nextElementSibling.textContent, 10))) * 60;

  let numberOfTimes = (parseInt(countUps[8].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[9].nextElementSibling.textContent, 10));

  let setRelaxTime = ((parseInt(countUps[10].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[11].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[12].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[13].nextElementSibling.textContent, 10))) * 60;
  
  countDowns.forEach((countDown) => {
    countDown.addEventListener('click', () => {
      if(countDown.previousElementSibling.textContent === '0') {
        return;
      } 
      countDown.previousElementSibling.textContent--;
      playTime.textContent = `${countUps[0].nextElementSibling.textContent}${countUps[1].nextElementSibling.textContent}:${countUps[2].nextElementSibling.textContent}${countUps[3].nextElementSibling.textContent}:00`;

      setPlaytime = ((parseInt(countUps[0].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[1].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[2].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[3].nextElementSibling.textContent, 10))) * 60;

      setIntervalTime = ((parseInt(countUps[4].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[5].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[6].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[7].nextElementSibling.textContent, 10))) * 60;

      numberOfTimes = (parseInt(countUps[8].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[9].nextElementSibling.textContent, 10));

      setRelaxTime = ((parseInt(countUps[10].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[11].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[12].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[13].nextElementSibling.textContent, 10))) * 60;

      setIntervalTime--;
      setRelaxTime--;

      console.log(setPlaytime);   
      console.log(setIntervalTime);   
      console.log(numberOfTimes);   
      console.log(setRelaxTime);   
    });
  });
  
  countUps.forEach((countUp) => {
    countUp.addEventListener('click', () => {
      playTime.textContent = `${countUps[0].nextElementSibling.textContent}${countUps[1].nextElementSibling.textContent}:${countUps[2].nextElementSibling.textContent}${countUps[3].nextElementSibling.textContent}:00`;

      setPlaytime = ((parseInt(countUps[0].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[1].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[2].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[3].nextElementSibling.textContent, 10))) * 60;

      setIntervalTime = ((parseInt(countUps[4].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[5].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[6].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[7].nextElementSibling.textContent, 10))) * 60;

      numberOfTimes = (parseInt(countUps[8].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[9].nextElementSibling.textContent, 10));

      setRelaxTime = ((parseInt(countUps[10].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[11].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[12].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[13].nextElementSibling.textContent, 10))) * 60;

      setIntervalTime--;
      setRelaxTime--;

      console.log(setPlaytime);   
      console.log(setIntervalTime);   
      console.log(numberOfTimes); 
      console.log(setRelaxTime); 
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

  let i = 1;

  const playNow = () => {
    setPlaytime--;
    let hour = `${((setPlaytime - setPlaytime % 60) / 60 - ((setPlaytime - setPlaytime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

    let min = `${(setPlaytime - setPlaytime % 60) / 60 % 60}`.padStart(2, '0');

    let second = `${setPlaytime % 60}`.padStart(2, '0');

    playTime.textContent = `${hour}:${min}:${second}`;
  };

  const intervalNow = () => {
    setIntervalTime--;
    let hour = `${((setIntervalTime - setIntervalTime % 60) / 60 - ((setIntervalTime - setIntervalTime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

    let min = `${(setIntervalTime - setIntervalTime % 60) / 60 % 60}`.padStart(2, '0');

    let second = `${setIntervalTime % 60}`.padStart(2, '0');

    playTime.textContent = `${hour}:${min}:${second}`;
  };

  const relaxNow = () => {
    setRelaxTime--;
    let hour = `${((setRelaxTime - setRelaxTime % 60) / 60 - ((setRelaxTime - setRelaxTime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

    let min = `${(setRelaxTime - setRelaxTime % 60) / 60 % 60}`.padStart(2, '0');

    let second = `${setRelaxTime % 60}`.padStart(2, '0');

    playTime.textContent = `${hour}:${min}:${second}`;
  };

  const focus = () => {
    if(playTime.classList.contains('relax')) {
      if(playTime.textContent === '00:00:00'){
        playTime.classList.remove('relax');
        i = 0;
        let hour = `${((setPlaytime - setPlaytime % 60) / 60 - ((setPlaytime - setPlaytime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

        let min = `${(setPlaytime - setPlaytime % 60) / 60 % 60}`.padStart(2, '0');

        let second = `${setPlaytime % 60}`.padStart(2, '0');

        playTime.textContent = `${hour}:${min}:${second}`;

        setRelaxTime = ((parseInt(countUps[10].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[11].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[12].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[13].nextElementSibling.textContent, 10))) * 60;
        setRelaxTime--;
      } else {
        relaxNow();
      }
    } else if(playTime.classList.contains('interval')) {
      if(playTime.textContent === '00:00:00') {
        playTime.classList.remove('interval');
        // playTime.classList.add('relax');

        let hour = `${((setPlaytime - setPlaytime % 60) / 60 - ((setPlaytime - setPlaytime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

        let min = `${(setPlaytime - setPlaytime % 60) / 60 % 60}`.padStart(2, '0');

        let second = `${setPlaytime % 60}`.padStart(2, '0');

        playTime.textContent = `${hour}:${min}:${second}`;

        setIntervalTime = ((parseInt(countUps[4].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[5].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[6].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[7].nextElementSibling.textContent, 10))) * 60;
        setIntervalTime--;
      } else {
        intervalNow();
      } 
    } else {
      if(playTime.textContent === '00:00:00' && i < numberOfTimes) {
        playTime.classList.add('interval');

        let hour = `${((setIntervalTime - setIntervalTime % 60) / 60 - ((setIntervalTime - setIntervalTime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

        let min = `${(setIntervalTime - setIntervalTime % 60) / 60 % 60}`.padStart(2, '0');

        let second = `${setIntervalTime % 60}`.padStart(2, '0');

        playTime.textContent = `${hour}:${min}:${second}`;

        i++;

        setPlaytime = ((parseInt(countUps[0].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[1].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[2].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[3].nextElementSibling.textContent, 10))) * 60;
        setPlaytime--;
      } else if(playTime.textContent === '00:00:00' && i === numberOfTimes) {
        playTime.classList.add('relax');
        let hour = `${((setRelaxTime - setRelaxTime % 60) / 60 - ((setRelaxTime - setRelaxTime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

        let min = `${(setRelaxTime - setRelaxTime % 60) / 60 % 60}`.padStart(2, '0');

        let second = `${setRelaxTime % 60}`.padStart(2, '0');

        playTime.textContent = `${hour}:${min}:${second}`;

        setPlaytime = ((parseInt(countUps[0].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[1].nextElementSibling.textContent, 10)) * 60 + (parseInt(countUps[2].nextElementSibling.textContent, 10) * 10 + parseInt(countUps[3].nextElementSibling.textContent, 10))) * 60;
        setPlaytime--;
      } else {
        playNow();
      }
    }

    // if(playTime.textContent === '00:00:00') {
    //   playTime.classList.add('interval');
    // }

    // playNow();

    // setPlaytime--;
    // let hour = `${((setPlaytime - setPlaytime % 60) / 60 - ((setPlaytime - setPlaytime % 60) / 60 % 60)) / 60}`.padStart(2, '0');

    // let min = `${(setPlaytime - setPlaytime % 60) / 60 % 60}`.padStart(2, '0');

    // let second = `${setPlaytime % 60}`.padStart(2, '0');

    // playTime.textContent = `${hour}:${min}:${second}`;
  };

  let intervalId;

  const timerStart = () => {
    if(!intervalId) {
      intervalId = setInterval(focus, 1000);
    }
  };

  playbtn.addEventListener('click', () => {
    playbtn.classList.add('pause');
    pausebtn.classList.remove('pause');
    // let intervalId = setInterval(focus, 1000);
    timerStart();
  });

  // const intervalId = setInterval(focus, 1000);

  const timerStop = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  pausebtn.addEventListener('click', () => {
    playbtn.classList.remove('pause');
    pausebtn.classList.add('pause');
    timerStop();
  });

}
