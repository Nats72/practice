function mouseover(){
  document.getElementById("area1").innerText = "マウスポインタが当たっています。";
}
function mouseout(){
  document.getElementById("area1").innerText = "ここにマウスポインタを当ててください。";
}

//マウスオーバー時の処理
function mouseOn(){
  var obj = document.getElementById("img1");
  obj.src = "にんにくぱんだ.png";
}

//マウスアウト時の処理
function mouseOff(){
  var obj = document.getElementById("img1");
  obj.src = "熱中症.jpg";
}

function mousepanda1(){
  document.getElementById("panframe1").Window.location.replace("test1.html");
}

function mousepanda2(){
  document.getElementById("panframe1").Window.location.replace("test2.html");
}
