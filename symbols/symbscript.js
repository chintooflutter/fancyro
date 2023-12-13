function copySymbol(symbol) {
    var tempInput = document.createElement("textarea");
    tempInput.value = symbol;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}