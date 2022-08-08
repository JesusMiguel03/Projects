"use strict"

const zone = document.querySelector('.dragZone')

zone.addEventListener("dragover", (e)=> {
    e.preventDefault()
})
 
zone.addEventListener('drop', e=> {
    e.preventDefault()
    loadFile(e.dataTransfer.files[0])
})

const changeStyle = (obj, color)=> {
    obj.style.color = color
    obj.style.border = `4px dashed ${color}`
}

const loadFile = ar => {
    const reader = new FileReader()
    const readerTxt = new FileReader()
    readerTxt.readAsText(ar)
    reader.readAsArrayBuffer(ar)

    reader.addEventListener('progress', e=> {
        let load = Math.round(e.loaded / ar.size * 100)
        zone.textContent = `${load}`
        document.querySelector('.bar').style.padding = "75px 100px"
        document.querySelector('.bar').style.width = `${load / 3.6}%`
    })

    reader.addEventListener('loadend', e=> {
        changeStyle(zone, "#8f9")
        zone.style.borderStyle = "solid"
        document.querySelector('.bar').style.background = "#2e7"
        setTimeout(()=> {
            zone.style.color = '#fff'
            zone.style.animation = "load 1s forwards"
            zone.textContent = 'File Loaded Successfully!'
        }, 500)
    })

    reader.addEventListener('load', e=> {
        //Text type
        if (['text/plain', 'text/css', 'text/html', 'text/javascript'].includes(ar.type)) {
            document.querySelector('.result').innerHTML = ""
            document.querySelector('.result').textContent = readerTxt.result

            //Photo type
        } else if (['image/png', 'image/jpg', 'image/jpg'].includes(ar.type)) {
            document.querySelector('.result').innerHTML = ""
            let url = URL.createObjectURL(ar)
            let img = document.createElement('img')
            img.setAttribute('src', url)
            document.querySelector('.result').appendChild(img)

            //Audio & video type
        } else if (['video/mp4', 'video/mp3', 'video/ogg', 'video/webm', 'audio/mpeg', 'audio/mp3'].includes(ar.type)) {
            document.querySelector('.result').innerHTML = ""
            let videoC = document.createElement('video')
            let video
            if (ar.tpye === 'video/mp4') {
                video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
            } else if (ar.type === 'video/ogg') {
                video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/ogg'})
            } else if (ar.type === 'video/webm') {
                video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/webm'})
            } else if (ar.type === 'audio/mpeg') {
                video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'audio/mpeg'})
            } else if (ar.type === 'audio/mp3') {
                video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'audio/mp3'})
            }
            let url = URL.createObjectURL(video)
            Object.assign(videoC, {
                src: url,
                'controls': 'controls'
            })
            document.querySelector('.result').appendChild(videoC)
            videoC.play()
        }
    })
}