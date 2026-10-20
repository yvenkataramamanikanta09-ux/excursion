// this is a javascript  file
document.querySelectorAll(".download-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    alert("The Excursion app is coming soon!");
  });
});