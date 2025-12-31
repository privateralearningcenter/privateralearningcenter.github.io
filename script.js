document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            const isActive = navLinks.classList.toggle('active');
            
            // Update icon and label
            menuToggle.innerHTML = isActive
                ? '<i class="fas fa-times" aria-hidden="true"></i>'
                : '<i class="fas fa-bars" aria-hidden="true"></i>';
            menuToggle.setAttribute('aria-label', isActive ? 'Close menu' : 'Open menu');
            menuToggle.setAttribute('title', isActive ? 'Close menu' : 'Open menu');
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

let vantaEffect;

document.addEventListener('DOMContentLoaded', function() {
    if (window.VANTA) {
        vantaEffect = VANTA.NET({
            el: "#vanta-hero",
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            color: 0x02367b,
            backgroundColor: 0x000000,
            points: 20.00,
            maxDistance: 30.00,
            spacing: 15.00
        });
    }
});


  const track = document.getElementById('testimonyTrack');
  const cardWidth = 340; // card width + gap

  document.querySelector('.testimony-btn.next').onclick = () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  document.querySelector('.testimony-btn.prev').onclick = () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };


  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');

      // close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
      });

      // open current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  const slides = document.querySelectorAll(".hero-text-slider .slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);
