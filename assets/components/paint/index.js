const canvas = document.getElementById("canvas")
const dif = canvas.getBoundingClientRect()
const ctx = canvas.getContext("2d")

let painting, color, linewidth, difX, difY, ejeX, ejeY;

canvas.addEventListener("mousedown", e=> {
    difX = e.clientX - dif.left
    difY = e.clientY - dif.top
    painting = true
    color = document.getElementById("color").value
    linewidth = document.getElementById("lw").value
    ctx.beginPath()
})

canvas.addEventListener("mousemove", e=> {
    if (painting) {
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top)
        difX = e.clientX - dif.left
        difY = e.clientY - dif.top
    }
})

canvas.addEventListener("mouseup", ()=> {
    ctx.closePath()
    painting = false
})

const dibujar = (x1, y1, x2, y2) => {
    ctx.strokeStyle = color
    ctx.lineWidth = linewidth
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}


// Mobile
canvas.addEventListener("touchstart", function(e) {
    console.log("touchstart")
    ejeX = e.touches[0].clientX - dif.left
    ejeY = e.touches[0].clientY - dif.top
    console.log(dif.left, dif.top)
    console.log(e.touches[0].clientX, e.touches[0].clientY)
    console.log(ejeX, ejeY)
    painting = true
    color = document.getElementById("color").value
    linewidth = document.getElementById("lw").value
    ctx.beginPath()
})

canvas.addEventListener("touchmove", function(e) {
    if (painting) {
        dibujartouch(ejeX, ejeY, e.changedTouches[0].clientX  - dif.left, e.changedTouches[0].clientY - dif.top)
        ejeX = e.changedTouches[0].clientX  - dif.left
        ejeY = e.changedTouches[0].clientY  - dif.top
    }
})

canvas.addEventListener("touchend", function(e) {
    let deltaX
    let deltaY
    deltaX = e.changedTouches[0].clientX - ejeX
    deltaY = e.changedTouches[0].clientY - ejeY
    ctx.closePath()
    painting = false
})

const dibujartouch = (x1, y1, x2, y2) => {
    ctx.strokeStyle = color
    ctx.lineWidth = linewidth
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}