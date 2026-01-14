/* =========================
   SIMPLE CAROUSEL LOGIC
   ========================= */

let scrollAmount = 0;
const track = document.querySelector(".carousel-track");

function nextSlide() {
  scrollAmount += 320;
  track.scrollTo({ left: scrollAmount, behavior: "smooth" });
}

function prevSlide() {
  scrollAmount -= 320;
  track.scrollTo({ left: scrollAmount, behavior: "smooth" });
}

/* =========================
   SCROLL TO CATEGORY
   ========================= */
function scrollToCategory(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
