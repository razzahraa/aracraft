// Smooth scroll ke setiap section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Pesan alert saat form dikirim
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan kamu sudah terkirim! Kami akan segera menghubungi.');
  this.reset();
});

// Burger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
