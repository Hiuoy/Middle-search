document.addEventListener('auxclick', function(event) {

  if (event.button === 1) {
    const selectedText = window.getSelection().toString().trim();
    
    
    if (selectedText.length > 0) {
      
      event.preventDefault();
      
      const searchUrl = `https://google.com{encodeURIComponent(selectedText)}`;
      
      
      window.open(searchUrl, '_blank');
    }
  }
});