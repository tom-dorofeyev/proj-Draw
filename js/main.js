'use strict'

let canvas
let ctx
let gIsMouseClicked = false

let currElement = 'triangle'

function changeEl(elName) {
    currElement = elName
}

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth - 50
    canvas.height = window.innerHeight - 100
}

function onStartDraw() {
    gIsMouseClicked = true;
}
function onStopDraw() {
    gIsMouseClicked = false;
}

function draw(ev) {
    if (gIsMouseClicked) {
        ctx.save()
        const { offsetX, offsetY } = ev
        switch (currElement) {
            case 'triangle':
                drawTriangle(offsetX, offsetY)
                break;
            case 'rect':
                drawRect(offsetX, offsetY)
                break;
            case 'text':
                drawText('Tom-Nadav', offsetX, offsetY)
                break;
            case 'arc':
                drawArc(offsetX, offsetY)
                break;
            case 'ink':
                drawInk(offsetX, offsetY)
                break;
        }
        ctx.restore()
    }
    else return
}

function downloadCanvas(elLink) {
    const data = canvas.toDataURL()
    elLink.href = data



    elLink.download = 'my-img.jpg'
}

function drawImg() {
    const img = document.querySelector('img');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

}

function clearCanvas() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawText(txt, x, y) {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'green'
    ctx.font = "17px Arial";
    ctx.strokeText(txt, x, y);
}


function drawArc(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawRect(x, y) {
    ctx.rect(x, y, 150, 150)
    // ctx.fillStyle = 'orange'
    // ctx.fillRect(x, y, 150, 150)
    ctx.stroke()
    // ctx.fill()
}

function drawInk(x, y) {
    ctx.lineWidth = 10
    ctx.moveTo(x, y);
    ctx.lineTo(x+1, y+1);
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgb(0, 0, 0)';
    ctx.stroke();
}



function drawTriangle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 300, y + 150);
    ctx.lineTo(x + 100, y + 100);
    ctx.closePath()

    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black'
    // ctx.fillStyle = '#ff0000'

    ctx.stroke();
    // ctx.fill()

}

