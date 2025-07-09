document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.indexdarkmode-nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  // Close mobile menu when clicking a link
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // Update active link
      document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');

      // Smooth scroll to section with offset for fixed header
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  // Update active link on scroll
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Add shadow to navbar on scroll
    const nav = document.querySelector('.indexdarkmode-nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Initialize scroll position
  window.dispatchEvent(new Event('scroll'));
});

document.addEventListener('DOMContentLoaded', function () {
  // Handle navigation links from service.html to index.html
  document.querySelectorAll('.nav-link[href^="index.html"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target section from data attribute
      const targetSection = this.getAttribute('data-section');
      const indexPage = 'index.html';

      // Check if we're already on index.html
      if (window.location.pathname.endsWith(indexPage)) {
        // Scroll to section on same page
        scrollToSection(targetSection);
      } else {
        // Going from service.html to index.html
        // Store the target section in sessionStorage
        sessionStorage.setItem('scrollToSection', targetSection);

        // Navigate to index.html
        window.location.href = indexPage;
      }
    });
  });

  // Check for stored scroll target when index.html loads
  if (window.location.pathname.endsWith('index.html')) {
    const targetSection = sessionStorage.getItem('scrollToSection');
    if (targetSection) {
      // Scroll to the target section after a small delay
      setTimeout(() => {
        scrollToSection(targetSection);
        // Clear the stored value
        sessionStorage.removeItem('scrollToSection');
      }, 100);
    }
  }

  // Function to handle smooth scrolling
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Update active link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
          link.classList.add('active');
        }
      });

      // Smooth scroll to section with offset for fixed header
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }

});