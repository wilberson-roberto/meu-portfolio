// Get the modal
var modal = document.getElementById("myVideoModal01");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myVideo01");
var modalImg = document.getElementById("video01");
var captionText = document.getElementById("captionVideo01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}