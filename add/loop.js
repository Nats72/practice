function for_loop(){
  var mydiv = document.getElementById("add_div");
  for(i=0;i<100;i++){
    if(i%2 === 0) continue;  //偶数のときは処理しない
    mydiv.insertAdjacentHTML("beforeend", "<p>"+i+"</p>");
  }
}

function inf_loop(){
  var mydiv = document.getElementById("add_div");
  count=0;
  for(;;){  //無限ループ
    mydiv.insertAdjacentHTML("beforeend", "<p>"+count+"</p>");
    if(count>20) break;  //countが20を超えたらループを抜ける
    count++;
  }
}

function for_in(){
  var mydiv = document.getElementById("add_div");
  var items = {item1:100, item2:200, item3:300};
  for(var key in items){  //itemに格納されてるだけループする
    mydiv.insertAdjacentHTML("beforeend", "<p>"+key +":"+items[key]+"</p>");
  }
}

function for_array(){
  var mydiv = document.getElementById("add_div");
  const arr=[1,2,3,4,5,6,7,8,9]

  for(let i=0;i<arr.length;i++){
    mydiv.insertAdjacentHTML("beforeend", "<p>"+arr[i]+"</p>");
  }
}

function while_loop(){
  var mydiv = document.getElementById("add_div");
  var i=0;
  while(i<10){
    mydiv.insertAdjacentHTML("beforeend", "<p>"+i+"</p>");
    i++;
  }
}
