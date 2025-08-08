// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Scroll Effect for Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Download Resume Functionality
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'Resume.pdf'; // Ensure this matches the file name
        link.download = 'Marvellous_Ogunleke_Resume.pdf'; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert('The Resume is downloading')
    });
});

// Back to Top Arrow Functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking a link
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Form Validation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    const name = contactForm.querySelector('input[type="text"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (e) => {
     

    // Simulate form submission (Netlify will handle the actual submission)
    const formData = new FormData(contactForm);

    fetch('/', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(() => {
        // Show success message
        successMessage.classList.add('show');

        // Clear the form
        contactForm.reset();

        // Hide the message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    })
    .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
    });
});
// Animate skills on scroll
const skills = document.querySelectorAll('.skills li');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.dataset.progress;
      entry.target.style.setProperty('--progress', `${progress}%`);
    }
  });
});

skills.forEach(skill => {
  observer.observe(skill);
});

particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
    },
    color: {
      value: '#2D5D7C',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#FF6B6B',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
  },
});

//whatsap

  function openWhatsApp(event) {
    event.preventDefault(); // Prevent form reload
    const message = document.getElementById("userMessage").value.trim();
    const defaultMessage = "Hello, I need your services on:";
    const number = "2348022871344"; // your WhatsApp number

   
    if (message) {
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      
    } 
    if (!message) {
      const url = `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}}`;
      window.open(url, "_blank");
    }

      document.getElementById("userMessage").value = ""; // clear input
  }

