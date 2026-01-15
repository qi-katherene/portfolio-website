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

