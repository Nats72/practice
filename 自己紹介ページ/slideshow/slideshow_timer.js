//https://www.sejuku.net/blog/68469

const pics_src = ["pics/1.jpg","pics/2.jpg","pics/3.jpg","pics/4.jpg"];
let num = -1;

//開始ボタンを押すとスタートさせる
function start() {
  setInterval(slideshow_timer,3000);
}

function slideshow_timer(){
  //3回ループさせたらnumを0に初期化する
  if (num === 3){
    num = 0;
  }
  //numに1をプラスする
  else {
    num ++;
  }
  //mypicというidのソースをpics_srcにあるURLにする
  document.getElementById("mypic").src = pics_src[num];
}

/* //ランダム表示させる
function slideshow_timer(){
  num = Math.floor(Math.random()*pics_src.length);
  document.getElementById("mypic").src = pics_src[num];
}
*/
