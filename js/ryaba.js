const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleData(data) {
  let item = data.text.toString();
  $("form :input").each(function () {
    let key = "{" + $(this).attr('name') + "}";
    let val = $(this).val();
    item = item.split(key).join(val);
  });
  $("#result").text(item);
}

function handleButton() {
  $.getJSON(dataURL, function (data) {
    handleData(data);
  });
}

function init() {
  $("#button-fetch").click(handleButton);
}

$(document).ready(init);
