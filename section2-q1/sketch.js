// 小手調べ
function setup(){
  createCanvas(300,300);
  for(let i = 0; i < 10; i++){
    if(i < 5){
      stroke(255, 0, 0)
    }
    else{
      stroke(0, 0, 255)
    }
  ellipse(150, 150, 250 - 25 * i);


  }
}
