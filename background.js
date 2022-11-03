function pasteToLocalStorage(text) {
	chrome.storage.sync.set({chromeClipboard: text});
}

function clipboardListener(event) {
	if (typeof event.data === "string") {
		pasteToLocalStorage(event.data);
	}
}

// todo: establish websocket connection with valid ditto servers
// this one is mock websocket connection URI
webSocket = new WebSocket("wss://socketsbay.com/wss/v2/2/demo/");

webSocket.onmessage = (event) => {
  clipboardListener(event);
}
