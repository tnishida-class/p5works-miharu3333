// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 30, 30);
}


function balloon(t, x, y){

  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;

  fill(94, 185, 84);
  rect(x, y, w + p * 2, h + p * 2);

  fill(255);
  textSize(18);
  textFont("serif");
  text(t, p * 0.5 + x, h + p + y * 0.5);


  fill(94, 185, 84);
  triangle((w + p * 2) * 0.6, h + p * 2 + y,
   (w + p * 2) * 0.9, h + p * 2 + y,
   (w + p * 2) * 1, (h + p * 2 + y) * 1.3);

}
