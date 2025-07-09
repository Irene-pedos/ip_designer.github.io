document.addEventListener('DOMContentLoaded', function() {
  const loadingBar = document.querySelector('.loading-bar');
  const mainContent = document.querySelector('.main-content');
  
  // Simulate loading (replace with actual loading logic)
  function simulateLoading() {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loadingBar.style.opacity = '0';
          document.body.classList.add('loaded');
          setTimeout(() => {
            loadingBar.style.display = 'none';
          }, 500);
        }, 300);
      } else {
        width += 10;
        loadingBar.style.width = width + '%';
      }
    }, 200);
  }

  // For real implementation, use:
  window.addEventListener('load', function() {
    loadingBar.style.width = '100%';
    setTimeout(() => {
      loadingBar.style.opacity = '0';
      document.body.classList.add('loaded');
      setTimeout(() => {
        loadingBar.style.display = 'none';
      }, 500);
    }, 300);
  });

  // Start loading simulation
  simulateLoading();
});