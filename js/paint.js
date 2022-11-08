//window.addEventListener("load", () => {
//
//});
/*window.addEventListener('resize', winSize);
function winSize() {
  canvas.height=window.innerHeight;
  canvas.width=window.innerWidth;
}
*/
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//ctx.strokeStyle = "#f00";
//ctx.fillStyle = "#fff";
//ctx.fillRect=(0,0, canvas.width, canvas.height);
let prevX, prevY, currX, currY;
let paint = false;

function startPosition() {
    paint = true;

}

function finishPosition() {
    paint = false;
    ctx.beginPath();
}
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishPosition);
canvas.addEventListener("mousemove", (e) => {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    draw();
});

function _(e, all = false) {
    let divs = document.querySelectorAll(e);
    if (all || (divs.length > 1)) {
        return divs;
    }
    return divs[0];
}

_('[name="color"]').addEventListener('change', function(e) {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

_('[name="width"]').addEventListener('change', function(e) {
    if (e.target.value < 1) {
        return false;
    }
    if (e.target.value > 10) {
        return false;
    }
    lineWidth = Math.round(e.target.value);
    ctx.lineWidth = lineWidth;
});

function draw(e) {
    if (!paint) return;
    ctx.lineCap = "round";
    ctx.beginPath();
    //ctx.moveTo(e.clientX, e.clientY);
    //ctx.lineTo(e.clientX, e.clientY);
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    //ctx.closePath();
}

function clearCanvas() {
    let lastFllStyle = ctx.fillStyle
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 5000, 5000);
    ctx.fillStyle = lastFllStyle;
    confirm("Do you want to reset?");
};

function download() {
    let link = document.createElement('a');
    link.setAttribute('download', 'draw.png');
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
};