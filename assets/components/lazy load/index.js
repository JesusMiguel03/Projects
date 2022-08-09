"use strict"

let names = ["Pedro","Juan","Gustabo","Hernesto","Julian","José","Michael","Ana","María","Andrés","Jacinta","Reina","Lucía","Antonio","Juana","Cristal","Andrea","Verónica","Bárbara","Francheska","Julia","Romeo","Carlos","Miguel","Matías","Marco","Paola","Ruben","Julio","Anderson","Camila","Daniela","Estefani","Fabiola","Gabriela","Helena","Irene","Jeniffer","Karoline","Matilda","Nataly","Orianny","Penelope","Quirina","Rosa","Sandy","Taddata","Ubraska","Verona","Wrancheska","Xabby","Yaneth","Zaodda","Bartolomeo","Daniel","Esteban","Francisco","Gabriel","Hector","Iban","Joseph","Klen","Manuel","Natan","Oscar","Pontreus","Querino","Ranuel","Samuel","Toby","Uriel","Victor","Weizz","Xavier","Yan","Zanneth"]
let lastnames = ["Gómez","González","Del Monte","Del Carmen","López","Gutierrez","Pérez","Andrade","Del Valle","Acosta","Martínez","García","Núñez","Morales","Sandoval","Urdaneta","Cruz","Rincón","Rivera","Ríos","Smith","Bravo","Martín","Sanchez","Rodriguez","White","Torres","Castro","Ruiz","Vargas","Vega","León","Medina","Cardenas","Aguilar","Reyes","Díaz","Salazar","Espinoza","Mendoza"]

const ctn = document.getElementById("ctn")
const publications =  document.querySelector(".publications")
let counter = 0

const createPublicationCode = (name, content) => {
    const container = document.createElement("DIV")
    const commentaries = document.createElement("DIV")
    const h3 = document.createElement("H3")
    const p = document.createElement("P")
    const btnComment = document.createElement("INPUT")
    const btnSend = document.createElement("INPUT")

    container.classList.add("publication")
    commentaries.classList.add("commentaries")
    btnComment.classList.add("comment")
    btnSend.classList.add("send")

    btnSend.type = "submit"

    btnComment.setAttribute("placeholder", "Introduce un comentario")
    h3.textContent = name
    p.textContent = content

    commentaries.appendChild(btnComment)
    commentaries.appendChild(btnSend)

    container.appendChild(h3)
    container.appendChild(p)
    container.appendChild(commentaries)

    return container
}

const loadPublications = async num => {
    function letter(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    
    const request = await fetch("info.txt")
    const content = await request.json()
    const arr = content.content
    const documentFragment = document.createDocumentFragment()
    ctn.textContent = `Publicaciones restantes: (${arr.length})`
    for (let i = 0; i < num; i++) {
        if (arr[counter] != undefined) {
            const newPublication = createPublicationCode(names[letter(1, names.length) - 1] + " " + lastnames[letter(1, lastnames.length) - 1], arr[counter].contentP)
            documentFragment.appendChild(newPublication)
            counter++
            if (i == num-1) observer.observe(newPublication)
        } else {
            if (publications.lastElementChild.id !== "nomore") {
                let noMore = document.createElement("H3")
                noMore.classList.add("end")
                noMore.setAttribute("id", "nomore")
                noMore.textContent = "No hay mas publicaciones"
                documentFragment.appendChild(noMore)
                publications.appendChild(documentFragment)
                break
            }
        }
    }
    publications.appendChild(documentFragment)
}

const loadMorePublications = entry => {
    if (entry[0].isIntersecting) loadPublications(4)
}
const observer = new IntersectionObserver(loadMorePublications)

loadPublications(5)