var modal = document.getElementById('myModal')

var img = document.getElementsByClassName('myImg')
var modal_img = document.getElementById('img01')
var captionText = document.getElementById('caption')

img.onclick = function() {
    modal.style.display = 'block'
    modal_img.src = this.src
    captionText.innerHTML = this.alt
}

var span = document.getElementsByClassName('close')[0]

span.onclick = function() {
    modal.style.display = 'none'
}