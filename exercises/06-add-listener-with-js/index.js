window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	const botonverde = document.getElementById("theGreen")
	botonverde.addEventListener("click",onclick)
};

// The listener function here
function onclick (){
	alert("woohoo!")
}