//My service worker...


self.addEventListener('message', (ev) => {
  //message received on port or direct to service worker
  console.log(ev)
});

let channel = new BroadcastChannel('wkrp');

function sendBack(msg) {
  channel.postMessage({ message: msg });
}