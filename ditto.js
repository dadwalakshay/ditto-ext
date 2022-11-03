function writeToClipboard(userInput) {
  navigator.clipboard.writeText(userInput).then(
    () => {
      // Nothing needs to be done here.
    },
    (e) => {
      alert(`Ditto failed ${e}`);
    }
  );
}

function pasteToRemote(userInput) {
  writeToClipboard(userInput);

  // todo: trigger an API call to update remote clipboard
}

document.addEventListener("DOMContentLoaded", function() {
  let copyButton = document.getElementById("ditto-copy-button");
  let pasteButton = document.getElementById("ditto-paste-button");

  copyButton.addEventListener("click", function() {
    chrome.storage.sync.get(["chromeClipboard"], function(result) {
      writeToClipboard(result.chromeClipboard);
    });
  }, false);

  pasteButton.addEventListener("click", function() {
    let userInput = document.getElementById("ditto-user-input").value;

	  pasteToRemote(userInput);
  }, false);
}, false);
