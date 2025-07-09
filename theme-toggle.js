
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check for saved preference or use dark mode as default
  const currentTheme = localStorage.getItem('theme') || 'dark-mode';
  body.classList.add(currentTheme);
  updateToggle(currentTheme);

  // Toggle between dark and light mode
  toggleButton.addEventListener('click', function () {
    if (body.classList.contains('dark-mode')) {
      body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
    updateToggle(body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
  });

  // Update toggle visual state
  function updateToggle(theme) {
    const toggleCircle = document.querySelector('.indexdarkmode-toggle-circle');
    const sunIcon = document.querySelector('.indexdarkmode-sun-icon');
    const moonIcon = document.querySelector('.indexdarkmode-moon-icon');

    if (theme === 'dark-mode') {
      toggleCircle.style.transform = 'translateX(3px)';
      sunIcon.style.opacity = '0';
      moonIcon.style.opacity = '1';
    } else {
      toggleCircle.style.transform = 'translateX(30px)';
      sunIcon.style.opacity = '1';
      moonIcon.style.opacity = '0';
    }
  }

  // Optional: Watch for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('theme') === null) { // Only if no manual preference set
      const newTheme = e.matches ? 'dark-mode' : 'light-mode';
      body.classList.replace(
        body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode',
        newTheme
      );
      updateToggle(newTheme);
    }
  });
});
// Initialize theme from localStorage or default to dark
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark-mode';
  document.body.classList.add(savedTheme);
  updateToggleVisuals(savedTheme);
}

// Update toggle button visuals
function updateToggleVisuals(theme) {
  const toggleCircle = document.querySelector('.indexdarkmode-toggle-circle');
  if (!toggleCircle) return;

  if (theme === 'light-mode') {
    toggleCircle.style.transform = 'translateX(30px)';
    toggleCircle.style.backgroundColor = '#6127FE';
  } else {
    toggleCircle.style.transform = 'translateX(0)';
    toggleCircle.style.backgroundColor = '#01C38E';
  }
}

// Toggle theme and save to localStorage
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  const currentTheme = document.body.classList.contains('light-mode')
    ? 'light-mode'
    : 'dark-mode';

  localStorage.setItem('theme', currentTheme);
  updateToggleVisuals(currentTheme);
}

// Get current theme for navigation
function getCurrentTheme() {
  return document.body.classList.contains('light-mode')
    ? 'light-mode'
    : 'dark-mode';
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initTheme);

// Make functions available globally
window.themeFunctions = {
  toggleTheme,
  getCurrentTheme
};
// Initialize theme from localStorage or default to dark
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark-mode';
  document.body.classList.add(savedTheme);
  updateToggleVisuals(savedTheme);
}

// Update toggle button visuals
function updateToggleVisuals(theme) {
  const toggleCircle = document.querySelector('.indexdarkmode-toggle-circle');
  if (!toggleCircle) return;

  toggleCircle.style.transform = theme === 'light-mode'
    ? 'translateX(30px)'
    : 'translateX(0)';
  toggleCircle.style.backgroundColor = theme === 'light-mode'
    ? '#6127FE'
    : '#01C38E';
}

// Toggle theme and save to localStorage
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  const currentTheme = document.body.classList.contains('light-mode')
    ? 'light-mode'
    : 'dark-mode';

  localStorage.setItem('theme', currentTheme);
  updateToggleVisuals(currentTheme);
}

// Get current theme for navigation
function getCurrentTheme() {
  return document.body.classList.contains('light-mode')
    ? 'light-mode'
    : 'dark-mode';
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initTheme);

// Make functions available globally
window.themeFunctions = {
  toggleTheme,
  getCurrentTheme,
  updateToggleVisuals
};