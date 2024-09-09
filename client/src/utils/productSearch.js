export function searchForProduct() {
   
    // Get the value from the input element with the ID "navSearchInput"
    var inputValue = document.getElementById("navSearchInput").value;
    
    // Check if the input value has at least one character
    if (inputValue.length >= 1) {
          /* 
          If true, redirect the user to the search page
          with the input value as a URL parameter
          */
      window.location.replace("/search/" + inputValue);
    }
  }
  