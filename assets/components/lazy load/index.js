"use strict"

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
    const request = await fetch("info.txt")
    const content = await request.json()
    const arr = content.content
    const documentFragment = document.createDocumentFragment()
    for (let i = 0; i < num; i++) {
        if (arr[counter] != undefined) {
            const newPublication = createPublicationCode(arr[counter].name, arr[counter].contentP)
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