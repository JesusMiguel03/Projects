const canvas = document.getElementById("canvas")
const dif = canvas.getBoundingClientRect()
const ctx = canvas.getContext("2d")
const clearBtn = document.getElementById("clear")
const number = document.getElementById("lineNumber") 
const save = document.getElementById("save")
const rectangle = document.getElementById("rectangle")
const circle = document.getElementById("circle")
const triangle = document.getElementById("triangle")

let painting, color, linewidth, difX, difY, ejeX, ejeY, heightRatio = 1.5;

// Clear screen
clearBtn.addEventListener("click", ()=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

save.addEventListener("click", ()=> {
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
})

// Responsive canvas
canvas.height = canvas.width * heightRatio

// Using mouse
canvas.addEventListener("mousedown", e=> {
    difX = e.clientX - dif.left
    difY = e.clientY - dif.top
    painting = true
    color = document.getElementById("color").value
    linewidth = document.getElementById("lw").value
    number.value = linewidth
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

// Using mobile
canvas.addEventListener("touchstart", function(e) {
    ejeX = e.touches[0].clientX - dif.left
    ejeY = e.touches[0].clientY - dif.top
    painting = true
    color = document.getElementById("color").value
    linewidth = document.getElementById("lw").value
    number.value = linewidth
    ctx.beginPath()
})

canvas.addEventListener("touchmove", function(e) {
    if (painting) {
        dibujartouch(ejeX, ejeY, e.changedTouches[0].clientX  - dif.left, e.changedTouches[0].clientY - dif.top)
        ejeX = e.changedTouches[0].clientX - dif.left
        ejeY = e.changedTouches[0].clientY - dif.top
    }
})

canvas.addEventListener("touchend", function(e) {
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

rectangle.addEventListener("click", ()=> {
    ctx.beginPath()
    ctx.moveTo(10, 10) // left
    ctx.lineTo(100, 10) // top - right
    ctx.lineTo(100, 50) // bottom
    ctx.lineTo(10, 50) // bottom - left
    ctx.lineTo(10, 10) // close rectangle
    ctx.stroke()
})

circle.addEventListener("click", ()=> {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
})

triangle.addEventListener("click", ()=> {
    ctx.beginPath()
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.lineTo(75,50);
    ctx.stroke()
})