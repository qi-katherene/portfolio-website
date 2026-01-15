document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     CAROUSEL
     ========================= */

  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-card');

  function nextSlide() {
    if (!track || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20;
    track.scrollLeft += cardWidth;

    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }

  function prevSlide() {
    if (!track || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20;
    track.scrollLeft -= cardWidth;

    if (track.scrollLeft <= 0) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    }
  }

  /* =========================
     SCROLL FROM CAROUSEL → LIST
     ========================= */

  function scrollToProject(projectTitle) {
    const links = document.querySelectorAll('.categories-column a');

    links.forEach(link => {
      if (link.dataset.title === projectTitle) {
        link.click();
        link.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  /* =========================
     LEFT COLUMN PROJECT CLICKS
     ========================= */

  const projectLinks = document.querySelectorAll('.categories-column a');
  const displayColumn = document.getElementById('project-display');

  projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const title = link.dataset.title;
      const description = link.dataset.description;

      displayColumn.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
      `;
    });
  });

  /* =========================
     EXPOSE FUNCTIONS TO HTML
     ========================= */
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.scrollToProject = scrollToProject;

});
