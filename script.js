// =========================
// CAROUSEL LOGIC
// =========================
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');

function nextSlide() {
  if (!track || cards.length === 0) return;

  const gap = 20;
  const cardWidth = cards[0].offsetWidth + gap;

  track.scrollLeft += cardWidth;

  // wrap to start
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

function prevSlide() {
  if (!track || cards.length === 0) return;

  const gap = 20;
  const cardWidth = cards[0].offsetWidth + gap;

  track.scrollLeft -= cardWidth;

  // wrap to end
  if (track.scrollLeft <= 0) {
    track.scrollTo({
      left: track.scrollWidth,
      behavior: 'smooth'
    });
  }
}

// =========================
// CAROUSEL → PROJECT LINK
// =========================
function scrollToProject(projectTitle) {
  const links = document.querySelectorAll('.categories-column a');

  links.forEach(link => {
    if (link.dataset.title === projectT
