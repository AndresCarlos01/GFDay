let currentImageIndex = 0;
let currentTextIndex = 0;

const images = document.querySelectorAll(".carousel-images img");
const textItems = document.querySelectorAll(".carousel-item");

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function showText(index) {
  textItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

function changeSlide(direction) {
  currentImageIndex =
    (currentImageIndex + direction + images.length) % images.length;
  showImage(currentImageIndex);
}

function changeImage(direction) {
  currentTextIndex =
    (currentTextIndex + direction + textItems.length) % textItems.length;
  showText(currentTextIndex);
}

// Initialize
showImage(currentImageIndex);
showText(currentTextIndex);
