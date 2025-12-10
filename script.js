// header.html load செய்ய
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });
  // contact.html load
  fetch("contact.html")
   .then(response => response.text())
   .then(data => {
     document .getElementById("contact").innerHTML = data; 
   });