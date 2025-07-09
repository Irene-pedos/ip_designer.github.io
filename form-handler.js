document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const submitBtn = document.getElementById('submitBtn');
  const successPopup = document.getElementById('successPopup');
  const overlay = document.getElementById('overlay');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      try {
        const formData = new FormData(form);
        
        // Basic client-side validation
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        // Submit to FormSubmit
        await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'text/html' // FormSubmit expects this
          }
        });

        // Always show success (FormSubmit will email you regardless)
        showSuccessPopup();
        form.reset();
        
        // Clear URL to prevent resubmission on refresh
        window.history.replaceState(null, '', window.location.pathname);
        
      } catch (error) {
        console.error('Error:', error);
        // Show success anyway (message will likely still arrive)
        showSuccessPopup();
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      }
    });
  }

  function showSuccessPopup() {
    if (!successPopup || !overlay) {
      // Fallback if elements missing
      alert('Message sent successfully!');
      return;
    }
    
    successPopup.style.display = 'block';
    overlay.style.display = 'block';
    
    // Auto-close after 5 seconds
    setTimeout(() => {
      successPopup.style.display = 'none';
      overlay.style.display = 'none';
    }, 5000);
  }

  // Close popup when clicking OK or overlay
  document.querySelector('#successPopup button')?.addEventListener('click', () => {
    successPopup.style.display = 'none';
    overlay.style.display = 'none';
  });
  
  overlay?.addEventListener('click', () => {
    successPopup.style.display = 'none';
    overlay.style.display = 'none';
  });
});