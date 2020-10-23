// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1){
        fill(255);
        rect(10 * i, 10 * j, 10, 10);
      }
      else if(j < 3){
        fill(196);
        rect(10 * i, 10 * j, 10, 10);
        fill(255, 0, 0);
        ellipse(5 + 10 * i, 5 + 10 * j, 9);
      }
      else if(j > 4){
        fill(196);
        rect(10 * i, 10 * j, 10, 10);
        fill(0);
        ellipse(5 + 10 * i, 5 + 10 * j, 9);
      }

      else{
        fill(196);
        rect(10 * i, 10 * j, 10, 10);
      }

      console.log(i, j);


    }
  }

}
