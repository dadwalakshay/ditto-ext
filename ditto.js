function copyToRemote (userInput) {
  navigator.clipboard.writeText(userInput).then(
    () => {
      // Nothing needs to be done here.
    },
    (e) => {
      alert(`Ditto failed ${e}`);
    }
  );
}

document.addEventListener("DOMContentLoaded", function() {
  let pasteButton = document.getElementById("ditto-paste-button");

  pasteButton.addEventListener("click", function() {
    let userInput = document.getElementById("ditto-user-input").value;

	  copyToRemote(userInput);
  }, false);
}, false);
