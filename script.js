const track = document.querySelector(".carousel-track");

function nextSlide() {
  track.scrollBy({ left: 320, behavior: "smooth" });
}

function prevSlide() {
  track.scrollBy({ left: -320, behavior: "smooth" });
}
