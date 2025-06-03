// Add scroll effect or interactivity if needed
// Example: Change navbar background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
