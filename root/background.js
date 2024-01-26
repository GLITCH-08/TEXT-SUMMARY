// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'summarizeText') {
        // Send an HTTP request to your Python server to summarize the text
        fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: request.text,
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the summarized data received from the server
            console.log('Summarized Text:', data.summary);

            // You can use this data as needed, e.g., display it to the user
            alert('Summarized Text:\n' + data.summary);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
