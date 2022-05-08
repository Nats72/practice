function change_error() {
  var mydiv = document.getElementById("change_div");
  mydiv.innerHTML = "<p>idと書いたつもりがclassのまま</p>";
  mydiv.insertAdjacentHTML("beforeend", "<p>関数の後ろに()をつけ忘れる</p>");
  mydiv.insertAdjacentHTML("beforeend", "<p>始めカッコと終わりカッコの数が合わない</p>");
}

function change_h1() {
  var mydiv = document.getElementById("change_div");
  mydiv.innerHTML = "<h1>H1です</h1>";
}

function change_h2() {
  var mydiv = document.getElementById("change_div");
  mydiv.innerHTML = "<h2>H2です</h2>";
}

function change_h3() {
  var mydiv = document.getElementById("change_div");
  mydiv.innerHTML = "<h3>H3です</h3>";
}

function change_h4() {
  var mydiv = document.getElementById("change_div");
  mydiv.innerHTML = "<h4>H4です</h4>";
}

function ins_beforebegin(){
  var mydiv = document.getElementById("change_div");
  mydiv.insertAdjacentHTML("beforebegin", "<p>要素の前にbeforebeginで追加したよ</p>");
}

function ins_afterbegin(){
  var mydiv = document.getElementById("change_div");
  mydiv.insertAdjacentHTML("afterbegin", "<p>要素内の最初にafterbeginで追加したよ</p>");
}

function ins_beforeend(){
  var mydiv = document.getElementById("change_div");
  mydiv.insertAdjacentHTML("beforeend", "<p>要素内の最後にbeforeendで追加したよ</p>");
}

function ins_afterend(){
  var mydiv = document.getElementById("change_div");
  mydiv.insertAdjacentHTML("afterend", "<p>要素の後ろにafterendで追加したよ</p>");
}
