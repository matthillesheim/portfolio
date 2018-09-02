const imageWrappers = document.querySelectorAll('.image-wrapper');

function toggleOverlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
