// TODO: Which element is the following line of code selecting? The class carouselbox class div
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting? Referencing the buttons with classes of next and prev
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

// setting the variable with an array of images //
var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

// the fuction for the crouselboc to display the images in the array //
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener. establishing event listener funcation
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  //event.stopPropagation();

  navigate(-1);
});

navigate(0);
