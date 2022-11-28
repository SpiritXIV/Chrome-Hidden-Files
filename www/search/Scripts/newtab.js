var title = "New Tab";

var imgFull = $('body').css('background-image').replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');

function imgSrc() {
  var imgFull = $('body').css('background-image').replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
  window.open(imgFull, '_self').focus();
}

function customize(type) {
  var input;
  var value;
  var currentTime = new Date();
  var time = currentTime.getHours() + ":" + currentTime.getMinutes();

  if (type == "background") {
    input = $('#background-input');
    value = input.val();

    $("body").css("background-image", "url(" + value + ")");
    return 0;
  } else if (type == "title") {
    input = $('#title-input');
    value = input.val();

    if (value == "") {
      value = "New Tab";
    }

    title = value;
    return 0;
  } else if (type == "default-bg") {
    input = $('#background-input');

    $("body").css("background-image", "url('Images/newtab_wallpaper.jpg')");
    input.val("");
    return 0;
  }
}

function timer() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  var dd = String(currentTime.getDate()).padStart(2, '0');
  var mm = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = currentTime.getFullYear();

  var date = mm + '/' + dd + '/' + yyyy;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes + " ";
  if (hours > 11 && hours > 12) {
    hours -= 12;
    time = hours + ":" + minutes + " ";
    time += "PM";
  } else if (hours > 11) {
    time = hours + ":" + minutes + " ";
    time += "PM";
  } else {
    time = hours + ":" + minutes + " ";
    time += "AM";
  }

  document.getElementById('heading').innerHTML = time;
  document.getElementById('date').innerHTML = date;

  $(document).attr("title", (title + " | " + time));
  setTimeout(timer, 1000);
}