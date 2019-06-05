'use strict'

let canvas;
let ctx;
let currElement = 'triangle';
let fillColor = "#000000";
let outlineColor = "#3354FF"

function changeEl(elName) {
    currElement = elName
}

function init() {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth - 50
    canvas.height = window.innerHeight - 100
}

function draw(ev) {
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
            drawText('test', offsetX, offsetY)
            break;
    }
    ctx.restore()
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
    ctx.fillStyle = 'yellow'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.clearRect(50, 50, 100, 100)
}

function drawText(txt, x, y) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = outlineColor;
    ctx.font = "17px Arial";
    ctx.strokeText(txt, x, y);
}

function drawArc() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 1 * Math.PI);
    ctx.stroke();
}

function drawRect(x, y) {
    ctx.rect(x, y, 150, 150)
    ctx.fillStyle = fillColor;
    ctx.fillRect(x, y, 150, 150)
    ctx.stroke()
    ctx.fill()
}

function drawTriangle(x,y) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + 300,y + 150);
    ctx.lineTo(x + 100, y +  100);
    ctx.closePath()

    ctx.lineWidth = 5;
    ctx.strokeStyle = outlineColor;
    ctx.fillStyle = fillColor;

    ctx.stroke();
    ctx.fill()

}

function changeFillColor(value){

}
