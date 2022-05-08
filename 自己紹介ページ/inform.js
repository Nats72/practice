//動作がおかしい。javascriptが使えない状態なら、なぜJavaが使えない状態ですって表示されるの？
//if(navigator.javaEnabled()) { document.write("Javaが使えます") }
//    else window.alert("Javaが使えない状態です");

//ウィンドウの高さと横幅を取得する
//Fmessというnameのform内にある
//fin1というnameのinputのvalue要素に高さを代入する
function eve1(){
  document.Fmess.fin1.value = window.innerHeight
  document.Fmess.fin2.value = window.innerWidth
}
window.onresize=eve1;
