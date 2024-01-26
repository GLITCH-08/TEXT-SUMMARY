// popup.js
document.addEventListener('DOMContentLoaded', function () {
    var inputText = document.getElementById('inputText');
    var summarizeButton = document.getElementById('summarizeButton');

    summarizeButton.addEventListener('click', function () {
        var textToSummarize = inputText.value;

        // Send a message to the background script to initiate text summarization
        chrome.runtime.sendMessage({ action: 'summarizeText', text: textToSummarize });
    });
});
