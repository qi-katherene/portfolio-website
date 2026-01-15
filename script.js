document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     CAROUSEL LOGIC
     ========================= */

  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-card');

  if (track && cards.length > 0) {

    function nextSlide() {
      const cardWidth = cards[0].offsetWidth + 20;
      track.scrollLeft += cardWidth;

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }

    function prevSlide() {
      const cardWidth = cards[0].offsetWidth + 20;
      track.scrollLeft -= cardWidth;

      if (track.scrollLeft <= 0) {
        track.scrollTo({
          left: track.scrollWidth,
          behavior: 'smooth'
        });
      }
    }

    // expose for HTML onclick
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
  }

  /* =========================
     PROJECT LINKS (LEFT COLUMN)
     ========================= */

  const projectLinks = document.querySelectorAll('.categories-column a');
  const displayColumn = document.getElementById('project-display');

  if (projectLinks.length && displayColumn) {
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
  }

});
