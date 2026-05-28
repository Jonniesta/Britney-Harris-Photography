const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentImageIndex = 0;

function showImage(index) {

  currentImageIndex = index;

  lightbox.classList.add("active");

  lightboxImg.classList.add("fade-out");

  setTimeout(() => {

    lightboxImg.src =
      galleryImages[currentImageIndex].src;

    lightboxImg.alt =
      galleryImages[currentImageIndex].alt;

    lightboxImg.onload = () => {
      lightboxImg.classList.remove("fade-out");
    };

  }, 180);

}

function nextImage() {

  currentImageIndex++;

  if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0;
  }

  showImage(currentImageIndex);

}

function prevImage() {

  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1;
  }

  showImage(currentImageIndex);

}

galleryImages.forEach((image, index) => {

  image.addEventListener("click", () => {
    showImage(index);
  });

});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", (event) => {

  event.stopPropagation();

  nextImage();

});

prevBtn.addEventListener("click", (event) => {

  event.stopPropagation();

  prevImage();

});

lightbox.addEventListener("click", (event) => {

  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }

});

document.addEventListener("keydown", (event) => {

  if (!lightbox.classList.contains("active")) return;

  if (event.key === "Escape") {
    lightbox.classList.remove("active");
  }

  if (event.key === "ArrowRight") {
    nextImage();
  }

  if (event.key === "ArrowLeft") {
    prevImage();
  }

});
