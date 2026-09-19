window.addEventListener('auxclick', function(event) {
  if (event.button === 1) {
    const selectedText = window.getSelection().toString().trim();
    
    if (selectedText.length > 0) {
      event.preventDefault();
      
      const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedText);
      
      window.open(searchUrl, '_blank');
    }
  }
}, true); 
