// content.js
alert('This is a content script running on YouTube.');

// Prompt the user for a security question
var answer = prompt('What is your favorite color?');

// Check the answer and perform an action
if (answer && answer.toLowerCase() === 'blue') {
  // The answer is correct, you can proceed with your desired action
  alert('Correct! You can proceed.');
} else {
  // Incorrect answer, send a message to close the current tab
  chrome.runtime.sendMessage({ closeTab: true });
}
