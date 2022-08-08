/* "use strict"

const userID = Math.round(Math.random() * 100)
console.log(userID)
const bc = new BroadcastChannel("dcode")
const container = document.querySelector(".chat")

const IDBRequest = indexedDB.open("database", 1)

IDBRequest.addEventListener("upgradeneeded", ()=> {
    const db = IDBRequest.result
    db.createObjectStore("mensajes", {
        autoIncrement: true
    })
})

const addObjetos = objeto => {
    const IDBData = getIDBData("readwrite", "Objeto agregado correctamente")
    IDBData.add(objeto)
}

const leerObjetos = (id) => {
    const IDBData = getIDBData("readonly")
    const cursor = IDBData.openCursor()
    var arr = []
    let i = 1
    cursor.addEventListener('success', ()=> {
        if (i >= 1) {
            arr += [cursor.result.key[i], cursor.result.value[0], cursor.result.value[1]]
            if (cursor.result.value[1] != userID) {
                createMessage2(cursor.result.value[0])
            }
            console.log(cursor.result.key, "Msg:" + cursor.result.value[0], "ID:" + cursor.result.value[1])
            cursor.result.continue()
            i++
        }
    })
}

const eliminarObjeto = key => {
    const IDBData = getIDBData("readwrite", 'Objeto eliminado correctamente')
    IDBData.delete(key)
}

const getIDBData = (mode, msg)=> {
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres", mode)
    const objectStore = IDBtransaction.objectStore("nombres")
    IDBtransaction.addEventListener("complete", ()=> {
        console.log(msg)
    })
    return objectStore
}

bc.addEventListener("message", e=> {
    addObjetos([e.data, userID])
    leerObjetos()
    createMessage(e.data)
})

const msg = document.querySelector(".message")
const btn = document.querySelector(".send")

btn.addEventListener("click", ()=> {
    //if (leerObjetos())
    bc.postMessage(msg.value)
    msg.value = ""
    console.log()
})

const createMessage = (msg) => {
    let div = document.createElement("DIV")
    div.classList.add("message-me")
    div.textContent = msg
    container.appendChild(div)
}

const createMessage2 = (msg) => {
    let div = document.createElement("DIV")
    div.classList.add("message-other")
    div.textContent = msg
    container.appendChild(div)
}
 */

const APP = {
    channel: new BroadcastChannel('wkrp'),
    init: () => {
      //add button listeners
      document
        .querySelector('.send')
        .addEventListener('click', APP.sendMessage);
      //register service worker
      navigator.serviceWorker.register('serviceWorker.js');
  
      //listen for broadcasted messages
      APP.channel.addEventListener('message', APP.gotMessage);
    },

    sendMessage: (ev) => {
      let msg = document.querySelector('.message').value;
      let msgContainer= document.querySelector('.message')
      console.log(msg)
      //send the message on the broadcast channel
      if (msg) {
        document.querySelector('.chat').innerHTML += `<div class="message-me">${msg}</div>`
        APP.channel.postMessage({ message: msg });
        msgContainer.value = ""
      }
    },
    gotMessage: (ev) => {
      //message received on the wkrp broadcast channel
      if (ev && ev.data) {
          document.querySelector('.chat').innerHTML += `<div class="message-other">${ev.data.message}</div>`
      }
    },
  };
  
  //once DOM has loaded as each page loads
  document.addEventListener('DOMContentLoaded', APP.init);