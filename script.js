// modal
var modal = document.getElementById("myModal");
var Modal = document.getElementById("linkModal");


//button (add to cart)
var btn = document.getElementById("add-to-cart");
var btn = document.getElementById("need-help");

// span (checkout)
var span = document.getElementsByClassName("checkout")[0];
var span = document.getElementsByClassName("dismiss")[0];

// dismiss button
btn.onclick = function() {
  modal.style.display = "block";
}

btn.onclick = function() {
  Modal.style.display = "block";
}


// span
span.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function() {
  Modal.style.display = "none";
}

// open when window
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == Modal) {
    Modal.style.display = "none";
  }
}













