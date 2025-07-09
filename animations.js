document.addEventListener('DOMContentLoaded', function() {
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };

  // Initialize scroll animation
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load

  // Loading animation completion
  const loadingBar = document.querySelector('.loading-bar');
  if (loadingBar) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        loadingBar.style.opacity = '0';
        setTimeout(function() {
          loadingBar.style.display = 'none';
        }, 500);
      }, 1000);
    });
  }

  // Service card hover animations
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});