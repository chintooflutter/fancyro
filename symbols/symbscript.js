function copyText(text) {
  var tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  updatePreview(text);
}

function updatePreview(symbol) {
  var symbolPreview = document.getElementById('symbolPreview');
  symbolPreview.innerText = symbol;
}