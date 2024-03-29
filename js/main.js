'use strict'

let canvas;
let ctx;
let currElement = 'triangle';
let gFillColor = "#000000";
let gOutlineColor = "#3354FF"
let gIsMouseClicked = false;

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
        // ctx.save()
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
        // ctx.restore()
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
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 50000, 50000);
    ctx.clearRect(0, 0, 50000, 50000);
}

function drawText(txt, x, y) {
    ctx.fillStyle = gFillColor;
    ctx.strokeStyle = gOutlineColor;
    ctx.font = "17px Arial";
    ctx.strokeText(txt, x, y);
}


function drawArc(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = gOutlineColor;
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgb(0, 0, 0)';
    ctx.lineWidth = 10
    ctx.stroke();
}

function drawRect(x, y) {
    ctx.rect(x, y, 150, 150)
    ctx.fillStyle = gFillColor;
    ctx.strokeStyle = gOutlineColor;
    ctx.strokeStyle = gOutlineColor;
    ctx.fillStyle = gFillColor;
    ctx.lineWidth = 10;
    ctx.fillRect(x, y, 150, 150)
    ctx.stroke()
}

function drawInk(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 50
    ctx.moveTo(x, y);
    ctx.lineTo(x + 1, y + 1);
    ctx.strokeStyle = gOutlineColor;
    ctx.fillStyle = gFillColor;
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgb(0, 0, 0)';
    ctx.stroke();
}

function drawTriangle(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 300, y + 150);
    ctx.lineTo(x + 100, y + 100);
    ctx.closePath()
    ctx.lineWidth = 10;
    ctx.strokeStyle = gOutlineColor;
    ctx.fillStyle = gFillColor;
    ctx.stroke();
    ctx.fill()
    ctx.closePath()
}

function changeColor(element) {
    console.log(element);
    if (element.id === 'fill') {
        gFillColor = element.value;
    } else if (element.id === 'outline') {
        gOutlineColor = element.value;
    }
}

function changeShape(value) {
    if (value === 'triangle') changeEl('triangle')
    else if (value === 'rect') changeEl('rect')
    else if (value === 'text') changeEl('text')
    else if (value === 'ink') changeEl('ink')
    else if (value === 'arc') changeEl('arc')
}
