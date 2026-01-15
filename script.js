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

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  /* =========================
     PROJECT LINK HANDLER
     ========================= */
  const projectLinks = document.querySelectorAll('.categories-column a');
  const displayColumn = document.getElementById('project-display');
  const projectsContainer = document.querySelector('.projects-container');
  const header = document.querySelector('.navbar');

  function showProject(title, description) {
    // Update right panel
    displayColumn.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
    `;

    // Scroll page to projects container top (accounting for fixed header)
    const headerHeight = header.offsetHeight;
    const containerTop = projectsContainer.offsetTop;
    window.scrollTo({
      top: containerTop - headerHeight - 20, // optional extra spacing
      behavior: 'smooth'
    });
  }

  // Sidebar link clicks
  projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showProject(link.dataset.title, link.dataset.description);
    });
  });

  /* =========================
     CAROUSEL CARD CLICKS
     ========================= */
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h2').innerText;
      // Find matching description from sidebar links
      const matchingLink = Array.from(projectLinks).find(
        l => l.dataset.title === title
      );
      if (matchingLink) {
        showProject(matchingLink.dataset.title, matchingLink.dataset.description);
      }
    });
  });

});
