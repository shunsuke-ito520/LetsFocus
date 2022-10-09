  // function setup() {
  //   canvas = createCanvas(windowWidth,windowHeight,WEBGL);//2Dの場合は引数にWEBGLは要らない
  //   canvas.position(0,0);//canvasをページの原点に固定
  //   canvas.style('z-index','-1');//canvasを後ろに移動する
  //   background(255);
  //   noStroke();
  //   fill(255);
  //   colorMode(HSB, 360, 100, 100, 255);
  // };

  // function draw() {
  
  //   const step = 20;
  
  //   for (let y = 0; y <= height; y += step) {
  //     for (let x = 0; x <= width; x += step) {
  //       const d = dist(x, y, mouseX, mouseY);
  //       const size = map(sin(d * 0.05), -1, 1, 0, 10);
  //       fill(map(sin(d * 0.05), -1, 1, 60, 320), 100, 100);
  //       ellipse(x, y, size, size);
  //     }
  //   }
  // }