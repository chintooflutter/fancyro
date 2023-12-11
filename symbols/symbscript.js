document.getElementById('symbolTable').addEventListener('click', function(event) {
    if (event.target.classList.contains('copyButton')) {
        var symbolCell = event.target.closest('tr').querySelector('td:first-child');
        copyText(symbolCell.innerText);
    }
});

document.getElementById('symbolTable').addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'TD') {
        var symbolPreview = document.getElementById('symbolPreview');
        symbolPreview.innerText = event.target.innerText;
        symbolPreview.classList.add('selected');
    }
});

document.getElementById('symbolTable').addEventListener('mouseout', function() {
    var symbolPreview = document.getElementById('symbolPreview');
    symbolPreview.innerText = 'Select a symbol to preview and copy here';
    symbolPreview.classList.remove('selected');
});

function copyText(text) {
    var tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert('Symbol copied: ' + text);
}
