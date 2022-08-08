const container1 = document.getElementById("num1")
const container2 = document.getElementById("num2")
const container3 = document.getElementById("num3")
const container4 = document.getElementById("num4")
const container5 = document.getElementById("num5")
const container6 = document.getElementById("num6")
const container7 = document.getElementById("num7")
const container8 = document.getElementById("num8")

const img1 = document.getElementById("weatherImg")
const img2 = document.getElementById("typingImg")
const img3 = document.getElementById("fileImg")
const img4 = document.getElementById("videogameImg")
const img5 = document.getElementById("chatImg")
const img6 = document.getElementById("dragdropImg")
const img7 = document.getElementById("paintImg")
const img8 = document.getElementById("lazyLoadImg")

const h1 = document.getElementById("weather")
const h2 = document.getElementById("typing")
const h3 = document.getElementById("file")
const h4 = document.getElementById("videogame")
const h5 = document.getElementById("chat")
const h6 = document.getElementById("dragdrop")
const h7 = document.getElementById("paint")
const h8 = document.getElementById("lazyLoad")

container1.addEventListener("mouseover", ()=> {
    img1.style.animation = "apear 1s forwards"
    img1.classList.add("show")
    h1.classList.add("hiden")
})

container1.addEventListener("mouseleave", ()=> {
    h1.style.animation = "apear 1s forwards"
    img1.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img1.classList.remove("show")
        h1.classList.remove("hiden")
    }, 1000)
})

container2.addEventListener("mouseover", ()=> {
    img2.style.animation = "apear 1s forwards"
    img2.classList.add("show")
    h2.classList.add("hiden")
})

container2.addEventListener("mouseleave", ()=> {
    h2.style.animation = "apear 1s forwards"
    img2.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img2.classList.remove("show")
        h2.classList.remove("hiden")
    }, 1000)
})

container3.addEventListener("mouseover", ()=> {
    img3.style.animation = "apear 1s forwards"
    img3.classList.add("show")
    h3.classList.add("hiden")
})

container3.addEventListener("mouseleave", ()=> {
    h3.style.animation = "apear 1s forwards"
    img3.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img3.classList.remove("show")
        h3.classList.remove("hiden")
    }, 1000)
})

container4.addEventListener("mouseover", ()=> {
    img4.style.animation = "apear 1s forwards"
    img4.classList.add("show")
    h4.classList.add("hiden")
})

container4.addEventListener("mouseleave", ()=> {
    h4.style.animation = "apear 1s forwards"
    img4.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img4.classList.remove("show")
        h4.classList.remove("hiden")
    }, 1000)
})

container5.addEventListener("mouseover", ()=> {
    img5.style.animation = "apear 1s forwards"
    img5.classList.add("show")
    h5.classList.add("hiden")
})

container5.addEventListener("mouseleave", ()=> {
    h5.style.animation = "apear 1s forwards"
    img5.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img5.classList.remove("show")
        h5.classList.remove("hiden")
    }, 1000)
})

container6.addEventListener("mouseover", ()=> {
    img6.style.animation = "apear 1s forwards"
    img6.classList.add("show")
    h6.classList.add("hiden")
})

container6.addEventListener("mouseleave", ()=> {
    h6.style.animation = "apear 1s forwards"
    img6.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img6.classList.remove("show")
        h6.classList.remove("hiden")
    }, 1000)
})

container7.addEventListener("mouseover", ()=> {
    img7.style.animation = "apear 1s forwards"
    img7.classList.add("show")
    h7.classList.add("hiden")
})

container7.addEventListener("mouseleave", ()=> {
    h7.style.animation = "apear 1s forwards"
    img7.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img7.classList.remove("show")
        h7.classList.remove("hiden")
    }, 1000)
})

container8.addEventListener("mouseover", ()=> {
    img8.style.animation = "apear 1s forwards"
    img8.classList.add("show")
    h8.classList.add("hiden")
})

container8.addEventListener("mouseleave", ()=> {
    h8.style.animation = "apear 1s forwards"
    img8.style.animation = "disapear 1s forwards"
    
    setTimeout(()=> {
        img8.classList.remove("show")
        h8.classList.remove("hiden")
    }, 1000)
})