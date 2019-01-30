// Selects the FIRST occurance of hearth-pink.png;
var images = document.querySelectorAll("img[src='img/hearth-pink.png']");
var element = document.querySelector("div");

 for (var i = 0; i < images.length; i++){ images[i].addEventListener("click", function() {
  element.classList.toggle("yay");
  this.classList.toggle("yay");
});
}