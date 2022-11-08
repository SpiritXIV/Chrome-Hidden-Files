function resize_iframe()
{
var opera = (navigator.userAgent.indexOf("Opera") >= 0)? true: false;
var ie = (document.all && !opera)? true: false;

if (parseInt(navigator.appVersion)>3) {
if (ie) {
document.body.scroll='no'; document.getElementById('glu').height=document.documentElement.clientHeight-100;
}
else {
document.body.scroll='no';
document.getElementById('glu').height=window.innerHeight-100;
}
}
}

window.onresize=resize_iframe();

function resize_iframe()
{

document.getElementById("glu").height=
document.body.offsetHeight-
document.getElementById("glu").offsetTop-0;
}
window.onresize=resize_iframe;
