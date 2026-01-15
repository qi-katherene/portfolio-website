const track = document.querySelector(".carousel-track");

function nextSlide() {
  track.scrollBy({ left: 320, behavior: "smooth" });
}

function prevSlide() {
  track.scrollBy({ left: -320, behavior: "smooth" });
}

function scrollToProject(projectTitle) {
  const links = document.querySelectorAll('.categories-column a');

  links.forEach(link => {
    if (link.dataset.title === projectTitle) {
      link.click();
      link.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');

function nextSlide() {
  const cardWidth = cards[0].offsetWidth + 20;
  track.scrollLeft += cardWidth;

  // wrap to start
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

function prevSlide() {
  const cardWidth = cards[0].offsetWidth + 20;
  track.scrollLeft -= cardWidth;

  // wrap to end
  if (track.scrollLeft <= 0) {
    track.scrollTo({
      left: track.scrollWidth,
      behavior: 'smooth'
    });
  }
}
