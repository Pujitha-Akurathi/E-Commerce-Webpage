 // Open Quick View Popup
    document.querySelectorAll('.products').forEach(product => {
      product.addEventListener('click', () => {
        const popup = document.querySelector('.quick-view-popup');
        const overlay = document.querySelector('.popup-overlay');
        if (popup && overlay) {
          popup.classList.add('active');
          overlay.classList.add('active');
        }
      });
    });

    // Close Quick View Popup
    const closeButton = document.querySelector('.popup-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        const popup = document.querySelector('.quick-view-popup');
        const overlay = document.querySelector('.popup-overlay');
        if (popup && overlay) {
          popup.classList.remove('active');
          overlay.classList.remove('active');
        }
      });
    }

    // Close popup when clicking outside the popup
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => {
        const popup = document.querySelector('.quick-view-popup');
        if (popup) {
          popup.classList.remove('active');
          overlay.classList.remove('active');
        }
      });
    }
    