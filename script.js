function updatePreview(styleClass, text) {
    var previewBox = document.getElementById(styleClass + 'Preview');
    previewBox.innerText = text;
}

function copyText(styleClass) {
    var copyText = document.getElementById(styleClass + 'Preview');
    var tempInput = document.createElement("textarea");
    tempInput.value = copyText.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var output = document.getElementById(styleClass + 'Output');
    output.innerText = "Text copied!";
}
