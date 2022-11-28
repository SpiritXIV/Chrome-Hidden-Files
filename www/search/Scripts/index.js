//Initialize Variables
let searchIn = $('#searchBar');
let value = searchIn.val();
let homeValue = "newtab.html";
let homeShow = "oasis://home";
let iframeSrc = 0;

let tld = ['https://', 'oasis://', '.com', '.net', '.org', '.io', '.co', '.ai', '.co.uk', '.ca', '.dev', '.me', '.de', '.app', '.in', '.is', '.eu', '.gg', '.to', '.ph', '.nl', '.id', '.inc', '.website', '.xyz', '.club', '.online', '.info', '.store', '.best', '.live', '.us', '.tech', '.pw', '.pro', '.uk', '.tv', '.cx', '.mx', '.fm', '.cc', '.world', '.space', '.vip', '.life', '.shop', '.host', '.fun', '.biz', '.icu', '.design', '.art'];

$(document).ready(function () {
  let value = searchIn.val();

  //Sync from cookies
  var themeState = localStorage.getItem("theme");
  var page = localStorage.getItem("page");
  var fontVal = localStorage.getItem("font");
  var changeSet = localStorage.getItem("changeSet");

  //Sync Font
  if (fontVal == "segoe") {
    $('body').css('font-family', "'Segoe UI Variable Static Display', 'Segoe UI', sans-serif");
  } else if (fontVal == 'roboto') {
    $('body').css('font-family', "'Roboto Mono', 'Consolas', monotype");
  } else if (fontVal == 'fira') {
    $('body').css('font-family', "'Fira Sans', 'Consolas', monotype");
  } else if (fontVal == 'sans') {
    $('body').css('font-family', "sans-serif");
  }

  //Sync Page (if selected)
  if ((page !== "")) {
    searchIn.val(page);
    search();
  }

  //Sync Theme
  if (themeState == "white") {
    white();
  } else if (themeState == "strong") {
    strong();
  } else if (themeState == "dark") {
    dark();
  } else {
    light();
  }
});

//Prevent right-click menu
document.addEventListener('contextmenu', event => event.preventDefault());

//Change fonts
function font(font) {
  if (font == "segoe") {
    $('body').css('font-family', "'Segoe UI Variable Static Display', 'Segoe UI', sans-serif");
  } else if (font == "roboto") {
    $('body').css('font-family', "'Roboto Mono', 'Consolas', monotype");
  } else if (font == "fira") {
    $('body').css('font-family', "'Fira Sans', 'Consolas', monotype");
  } else if (font == "sans") {
    $('body').css('font-family', "sans-serif");
  }

  localStorage.setItem("font", font);
  return 0;
}


function search() {
  $('#form-icon').attr("uk-icon", "icon: search");
  
  searchIn.blur(function () {
    $('#form-icon').attr("uk-icon", "icon: lock");
  });

  searchIn.keydown(function () {
    if ((tld.some(v => value.includes(v)))) {
      $('#form-icon').attr("uk-icon", "icon: world");
    } else {
      $('#form-icon').attr("uk-icon", "icon: search");
    }
  });

  searchIn.keypress(function (e) {
    value = searchIn.val();
    
    if (e.which == 13) {
      event.preventDefault();
      e.preventDefault();

      searchIn.blur();

      value = searchIn.val();

      if (value == "") {
        return;
      } else if ((tld.some(v => value.includes(v)))) {
        url();
        return;
      } else {
        searchEngine();
        return;
      }
    }
  })
}

//Search Function
function url() {
  let value = searchIn.val();

  //Cycles through internal urls and https://
  if (value.substring(0, 12) == "inception://") {
    searchIn.val("inception://oasis;elo5=false&pegasus98**=query2.1;");
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='index.html' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";

    $("#searchBar").blur();
    event.preventDefault();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 12) == "home") {
    document.getElementById('page').innerHTML = "<iframe src='" + homeValue + "' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
    searchIn.val(homeShow);
    localStorage.setItem("page", "oasis://home");

    event.preventDefault();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 15) == "restart") {
    location.assign("index.html");
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 12) == "dino") {
    searchIn.val("oasis://dino");
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='file:///C:/Users/s-aroshin/OneDrive%20-%20Lake%20Washington%20School%20District/Other/Coding/Websites/OASIS/Minigames/Dino/index.html' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
    localStorage.setItem("page", "file:///C:/Users/s-aroshin/OneDrive%20-%20Lake%20Washington%20School%20District/Other/Coding/Websites/OASIS/Minigames/Dino/index.html")

    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 15) == "survive") {
    searchIn.val("oasis://survive");
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='file:///C:/Users/s-aroshin/OneDrive%20-%20Lake%20Washington%20School%20District/Other/Coding/Websites/OASIS/Minigames/Survivor/index.html' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
    localStorage.setItem("page", "file:///C:/Users/s-aroshin/OneDrive%20-%20Lake%20Washington%20School%20District/Other/Coding/Websites/OASIS/Minigames/Survivor/index.html")

    return 0;
  } else if ((value.substring(0, 8) == "https://" && value.substring(8, 33) == "buyasmallrussianchild.com") || (value.substring(0, 25) == "buyasmallrussianchild.com")) { //Internal Joke. Ignore it.
    event.preventDefault();
    searchIn.val("https://buyasmallrussianchild.com");

    setTimeout(() => { alert('Your small russian child will be availible for the price of $35.27. Please pick up at +1 420-BUY-CHILD.'); }, 1000);
    event.preventDefault();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 14) == "hardre") {
    clearCookies();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 14) == "newtab") {
    window.open('browser-embed.html', '_blank');
    event.preventDefault();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 12) == "quit") {
    window.open("index.html", '_self');
    window.close();
    event.preventDefault();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 17) == "inception") {
    searchIn.val("inception://oasis;elo5=false&pegasus98**=query2.1;");
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='https://projectoasis.w3spaces.com/browser-embed.html' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";

    $("#searchBar").blur();

    event.preventDefault();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 13) == "theme") {
    event.preventDefault();
    UIkit.offcanvas('#settings').show();
    return 0;
  } else if (value.substring(0, 8) == "oasis://" && value.substring(8, 14) == "change") {
    changelog();
    return 0;
  } else if (value.substring(0, 8) == "oasis://") {
    UIkit.modal.dialog("<p class='uk-modal-body'>Whoops! That doesn't exist.</p>");
    event.preventDefault();
    return 0;
  } else if (value.substring(0, 1) == "") {
    event.preventDefault();
    return 0;
  }

  if ((value.substring(0, 8)) == ("https://")) {
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='" + value + "' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
    localStorage.setItem("page", value);

    $("#searchBar").blur();
    event.preventDefault();
  } else {
    searchIn.val("https://" + value)
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='https://" + value + "' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
    localStorage.setItem("page", ("https://" + value));

    $("#searchBar").blur();
    event.preventDefault();
  }
}

function searchEngine() {
  let value = searchIn.val();

  document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='https://ekoru.org/?q=" + value + "' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
  localStorage.setItem("page", ("https://ekoru.org/?q='" + value + "'"));
  searchIn.val("https://ekoru.org/?q=" + value)

  $("#searchBar").blur();
  event.preventDefault();
}

//Clear Web Storage API
function clearCookies() {
  let cookiePrompt = confirm('We know that cookies have a bad reputation, but we use them to save your data so that you can pick up where you left off. Are you sure you want to do this?');

  if (cookiePrompt == true) {
    localStorage.clear();
    alert('Cleared!');
    location.assign("index.html");
  } else if (cookiePrompt == false) {
    return 0;
  }
}

function changelog() {
  document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='changelog.html' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
  searchIn.val("oasis://change");

  $("#searchBar").blur();
  event.preventDefault();
}

//Function for home button
/*Deprecated, may be added back later
function home() {
  document.getElementById('page').innerHTML = "<iframe src='" + homeValue + "' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
  searchIn.val(homeShow);
}
*/

//Theme functions
function white() {
  $('#top, #changelog').addClass('uk-section-default');
  $('#top, #changelog').removeClass('uk-section-muted');
  $('#top, #changelog').removeClass('uk-section-secondary');
  $('#top, #changelog').removeClass('uk-section-primary');

  localStorage.setItem("theme", "white");
  return 0;
}

function light() {
  $('#top, #changelog').addClass('uk-section-muted');
  $('#top, #changelog').removeClass('uk-section-default');
  $('#top, #changelog').removeClass('uk-section-secondary');
  $('#top, #changelog').removeClass('uk-section-primary');

  localStorage.setItem("theme", "light");

  return 0;
}

function strong() {
  $('#top, #changelog').addClass('uk-section-primary');
  $('#top, #changelog').removeClass('uk-section-muted');
  $('#top, #changelog').removeClass('uk-section-secondary');
  $('#top, #changelog').removeClass('uk-section-default');

  localStorage.setItem("theme", "strong");

  return 0;
}

function dark() {
  $('#top, #changelog').addClass('uk-section-secondary');
  $('#top, #changelog').removeClass('uk-section-muted');
  $('#top, #changelog').removeClass('uk-section-primary');
  $('#top, #changelog').removeClass('uk-section-default');

  localStorage.setItem("theme", "dark");

  return 0;
}

// Function for inception
function inception() {
  searchIn.val("inception://oasis;elo5=false&pegasus98**=query2.1;");
  document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='index.html' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";

  $("#searchBar").blur();
}

// Function for refresh
function refresh() {
  let value = searchIn.val();

  // If URL bar is blank
  if ((value.substring(0, 1)) == "") {
    UIkit.modal.dialog("<p class='uk-modal-body'>To reload a page, the URL bar must have the URL you want to go refresh.</p>");
    return 0;
  }

  // If is internal url
  if ((value.substring(0, 8)) == "oasis://") {
    UIkit.modal.dialog("<p class='uk-modal-body'>Uh-oh! You can't reload an internal URL.</p>");
    return 0;
  }

  // Blanks Page
  document.getElementById('page').innerHTML = " ";

  // Refreshes
  if ((value.substring(0, 8)) == "https://") {
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='" + value + "' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
  } else {
    searchIn.val("https://" + value)
    document.getElementById('page').innerHTML = "<iframe id='pageIframe' src='https://" + value + "' class='uk-width-1-1 uk-height-1-1'><p>Uh Oh! Your browser doesn't support this feature :(</p></iframe>";
  }
}
