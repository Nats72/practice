function plus_button() {
  nowDate = new Date();
  var input_id = document.getElementById("day_input");
  var input_value = input_id.getAttribute("value");
  nowDate.setDate(nowDate.getDate());
  alert(input_id)
}

function clear_button(){
  var input_id = document.getElementById("day_input");
  input_id.getAttribute("value");
  alert(input_id)
}
