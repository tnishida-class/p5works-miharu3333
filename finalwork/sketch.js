// 最終課題を制作しよう
let x, y, vx, vy;
let flowers = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}

  function draw(){
    background(170, 220, 255);
    cloud1(x, y);
    cloud2(x, y);
    grass(x, y);
    for(let i = 0; i < flowers.length; i++){
    let f = flowers[i];
    flower(f.x, f.y);
    f.x += f.vx
    f.y += f.vy
    face(x,y);
  }
  flowers = flowers.filter(isInTheWindow);
}

  function flower(x, y){
  beginShape();
  push();
  translate(x, y);
  noStroke();
  fill(200, 100, 190, 120);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 20, 25, 30);
    rotate(PI/5);
  }
  rotate(frameCount / 50);
  pop();
  endShape(CLOSE);
}


  function cloud1(x, y){
    noStroke();
    fill(255, 255, 255);
    ellipse(windowWidth / 4, windowHeight / 3, windowWidth / 5, windowHeight / 6);
    ellipse(windowWidth / 4 * 1.5, windowHeight / 3, windowWidth / 5, windowHeight / 6);
    ellipse(windowWidth / 4 * 1.1, windowHeight / 3 * 0.8, windowHeight / 5);
    ellipse(windowWidth / 4 * 1.4, windowHeight / 3 * 0.7, windowWidth / 5);
  }

  function cloud2(x, y){
    noStroke();
    fill(255, 255, 255);
    ellipse(windowWidth / 4 * 3, windowHeight / 4, windowWidth / 7, windowHeight / 10);
    ellipse(windowWidth / 4 * 3.2, windowHeight / 4, windowWidth / 7, windowHeight / 10);
    ellipse(windowWidth / 4 * 3, windowHeight / 4 * 0.8, windowHeight / 10);
    ellipse(windowWidth / 4 * 3.2, windowHeight / 4 * 0.7, windowWidth / 10, windowWidth / 9);
  }

  function grass(x, y){
    noStroke();
    fill(190, 220, 130);
    ellipse(windowWidth * 0.15, windowHeight * 0.9, windowWidth * 0.4, windowHeight * 0.45);
    ellipse(windowWidth * 0.4, windowHeight * 0.85, windowWidth * 0.3, windowHeight * 0.4);
    ellipse(windowWidth * 0.6, windowHeight * 0.9, windowWidth * 0.4, windowHeight * 0.4);
    ellipse(windowWidth * 0.9, windowHeight * 0.85, windowWidth * 0.4, windowHeight * 0.4);
  }

  function face(x, y){
    noStroke();
    fill(0, 0, 0);
    ellipse(windowWidth * 0.3, windowHeight * 0.25, 10);
    ellipse(windowWidth * 0.35, windowHeight * 0.25, 10);
    stroke(255, 155, 170);
    fill(255, 155, 170);
    curve(windowWidth * 0.2, windowHeight * 0.2,
      windowWidth * 0.28, windowHeight * 0.3,
      windowWidth * 0.37, windowHeight * 0.3,
      windowWidth * 0.45, windowHeight * 0.2);

      noStroke();
      fill(0, 0, 0);
      ellipse(windowWidth * 0.77, windowHeight * 0.2, 7);
      ellipse(windowWidth * 0.8, windowHeight * 0.2, 7);
      stroke(255, 155, 170);
      fill(255, 155, 170);
      curve(windowWidth * 0.75, windowHeight * 0.1,
        windowWidth * 0.8, windowHeight * 0.23,
        windowWidth * 0.78, windowHeight * 0.23,
        windowWidth * 0.85, windowHeight * 0.1);

  }

  function mouseDragged(){
    const dx = mouseX - pmouseX;
    const dy = mouseY - pmouseY;
    if(mag(dx, dy) > 1){
      const f = { x: mouseX, y: mouseY, vx: dx, vy: dy };
      flowers.push(f);
    }
  }


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function isInTheWindow(f){
  return f.x > 0 && f.x < width && f.y > 0 && f.y < height;
}
