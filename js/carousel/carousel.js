var index = 0;
var i;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var timeout;

carousel();

function next() {
	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" active", "");
  	}

	index++;

	if (index > slides.length) {
		index = 1;
	}

	slides[index - 1].style.display = "block";
	dots[index - 1].className += " active";

	clearTimeout(timeout);
	timeout = setTimeout(carousel, 5000);
}

function previous() {
	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" active", "");
  	}

	index--;

	if (index < 1) {
		index = slides.length;
	}

	slides[index - 1].style.display = "block";
	dots[index - 1].className += " active";

	clearTimeout(timeout);
	timeout = setTimeout(carousel, 5000);
}

function pickSlide(n) {
	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" active", "");
  	}

	index = n;

	slides[index - 1].style.display = "block";
	dots[index - 1].className += " active";

	clearTimeout(timeout);
	timeout = setTimeout(carousel, 5000);
}

function carousel() {
  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
		dots[i].className = dots[i].className.replace(" active", "");
  	}

  	index++;

  	if (index > slides.length) {
		index = 1;
	}

  	slides[index - 1].style.display = "block";
	dots[index - 1].className += " active";

	timeout = setTimeout(carousel, 5000);
}
