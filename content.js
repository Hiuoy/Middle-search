window.addEventListener('right', function(event) {
  if (event.button === 2) {
    const selectedText = window.getSelection().toString().trim();
    
    if (selectedText.length > 0) {
      event.preventDefault();
      const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedText);
    
      chrome.runtime.sendMessage({ 
        action: "openBackgroundTab", 
        url: searchUrl 
                                    });
    }
  }
}, true);