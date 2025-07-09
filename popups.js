// Popup Controls
function showPopup() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('successPopup').style.display = 'block';
  // Auto-close after 5 seconds
  setTimeout(closePopup, 5000);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('successPopup').style.display = 'none';
}
// Simulate loading
window.addEventListener('load', function () {
  setTimeout(function () {
    document.querySelector('.loading-bar').style.opacity = '0';
    setTimeout(function () {
      document.querySelector('.loading-bar').style.display = 'none';
    }, 500);
  }, 1000);
});
// FAQ Popup Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  const faqTrigger = document.getElementById('faqTrigger');
  const faqTrigger2 = document.getElementById('faqTrigger2');
  const faqOverlay = document.getElementById('faqOverlay');
  const faqCloseBtn = document.getElementById('faqCloseBtn');
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Toggle FAQ overlay
  function toggleFAQ(e) {
    e.preventDefault();
    faqOverlay.classList.toggle('active');
  }

  // Event listeners
  faqTrigger.addEventListener('click', toggleFAQ);
  faqTrigger2.addEventListener('click', toggleFAQ);
  faqCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    faqOverlay.classList.remove('active');
  });

  // Close when clicking outside popup
  faqOverlay.addEventListener('click', function (e) {
    if (e.target === faqOverlay) {
      faqOverlay.classList.remove('active');
    }
  });

  // Toggle FAQ answers
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      // Close all other answers
      document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
        if (activeQuestion !== question) {
          activeQuestion.classList.remove('active');
          activeQuestion.nextElementSibling.style.display = 'none';
        }
      });

      // Toggle current answer
      question.classList.toggle('active');
      answer.style.display = isActive ? 'none' : 'block';
    });
  });
});

// Terms Popup Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  const termsTrigger = document.getElementById('termsTrigger');
  const termsTrigger2 = document.getElementById('termsTrigger2');
  const termsOverlay = document.getElementById('termsOverlay');
  const termsCloseBtn = document.getElementById('termsCloseBtn');

  // Toggle Terms overlay
  function toggleTerms(e) {
    e.preventDefault();
    termsOverlay.classList.toggle('active');
  }

  // Event listeners
  termsTrigger.addEventListener('click', toggleTerms);
  termsTrigger2.addEventListener('click', toggleTerms);
  termsCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    termsOverlay.classList.remove('active');
  });

  // Close when clicking outside popup
  termsOverlay.addEventListener('click', function (e) {
    if (e.target === termsOverlay) {
      termsOverlay.classList.remove('active');
    }
  });
});

// Privacy Policy Popup Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  const privacyTrigger = document.getElementById('privacyTrigger');
  const privacyTrigger2 = document.getElementById('privacyTrigger2');
  const privacyOverlay = document.getElementById('privacyOverlay');
  const privacyCloseBtn = document.getElementById('privacyCloseBtn');

  // Toggle Privacy overlay
  function togglePrivacy(e) {
    e.preventDefault();
    privacyOverlay.classList.toggle('active');
  }

  // Event listeners
  privacyTrigger.addEventListener('click', togglePrivacy);
  privacyTrigger2.addEventListener('click', togglePrivacy);
  privacyCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    privacyOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close when clicking outside popup
  privacyOverlay.addEventListener('click', function (e) {
    if (e.target === privacyOverlay) {
      privacyOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && privacyOverlay.classList.contains('active')) {
      privacyOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
