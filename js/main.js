// get the model
var model = document.getElementById('the_model')
var img = document.getElementById('the_image')
    //get the content of model
var modelImg = document.getElementById('img'),
    modelcaption = document.getElementById('caption')
img.onclick = function() {
    model.style.display = "block";
    modelImg.src = this.src
    modelcaption.innerHTML = this.alt
};
// get close button
var closebuttom = document.getElementById('close')
closebuttom.onclick = function() {
    model.style.display = "none";
}
document.onkeydown = function(ev) {
    if (ev.keycode = "27") {
        model.style.display = "none";
    }
}