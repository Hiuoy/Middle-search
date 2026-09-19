document.addEventListener('auxclick', function(event) {

  if (event.button === 1) {
    const selectedText = window.getSelection().toString().trim();
    
    
    if (selectedText.length > 0) {
      
      event.preventDefault();
      
      chrome.runtime.sendMessage({ type: "SEARCH_TEXT", text: selectedText });
    }
  }
});