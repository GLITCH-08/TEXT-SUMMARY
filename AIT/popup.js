// document.addEventListener('DOMContentLoaded', function () {
//   var submitButton = document.getElementById('submitBtn');
//   submitButton.addEventListener('click', checkAnswer);
// });

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.openPopup) {
//     // Open the popup when requested by the background script
//     openPopup();
//   }
// });

// function openPopup() {
//   // Your popup opening logic here
//   // For example, show the popup or focus on the input field
//   alert('Extension popup opened!');
// }

// function checkAnswer() {
//   var favoriteColor = document.getElementById('favoriteColor').value.toLowerCase();

//   if (favoriteColor === 'blue') {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       // Open a new tab or perform any other action here
//       // For example, open a specific URL in a new tab
//       chrome.tabs.create({ url: 'https://example.com' });
//     });
//   } else {
//     alert('Access denied. Favorite color is incorrect.'); 
//   }
// }
