/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event)
  {
    if (!event.target.matches('.dropbtn')) 
    {
      var dropdown = document.getElementByClassName("dropdown-content");
           if (dropdown.classList.contains('show')) 
      {
                  dropdown.classList.remove('show');
            }
      
    }
  }