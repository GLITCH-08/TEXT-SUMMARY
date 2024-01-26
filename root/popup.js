document.addEventListener('DOMContentLoaded', function () {
    var inputText = document.getElementById('inputText');
    var summarizeButton = document.getElementById('summarizeButton');

    // Establish a connection to the background script
    const backgroundPort = chrome.runtime.connect({ name: 'popup' });

    summarizeButton.addEventListener('click', function () {
        var textToSummarize = inputText.value;

        // Send a message to the background script to initiate text summarization
        backgroundPort.postMessage({ action: 'summarizeText', text: textToSummarize });
    });

    // Handle messages from the background script
    backgroundPort.onMessage.addListener(function (msg) {
        if (msg.action === 'updateOutput') {
            // Update the output div with the summarized text
            document.getElementById('outputDiv').innerText = msg.summary;
        }
    });
});
