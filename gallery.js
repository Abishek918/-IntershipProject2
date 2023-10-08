// script.js
const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close");

// Function to open the lightbox
function openLightbox(imageSrc) {
    lightboxContent.src = imageSrc;
    lightbox.style.display = "block";
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Event listener to open lightbox when an image is clicked
gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        openLightbox(e.target.src);
    }
});

// Event listener to close lightbox when the close button is clicked
closeBtn.addEventListener("click", closeLightbox);

// Event listener to close lightbox when the background is clicked
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
