
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navList = document.getElementById('navList');
  function toggleMenu() {
    const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  }
  hamburgerBtn.addEventListener('click', toggleMenu);
  hamburgerBtn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if(targetEl) {
        targetEl.scrollIntoView({behavior: 'smooth'});
        if(navList.classList.contains('show')) {
          toggleMenu();
        }
      }
    });
  });
  // Animate on scroll
  const animatedElements = document.querySelectorAll('[data-animate]');
  function activateAnimations() {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', activateAnimations);
  window.addEventListener('load', activateAnimations);
  // Contact form submission simulation
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you shortly.');
    contactForm.reset();
  });

  // Project data for modal
  const projectsData = {
 laravelecommerce: {
      title: 'Laravel E-commerce',
      description: 'A Laravel-based E-commerce web application with authentication, product catalog, cart, checkout, and order management features.',
      images: [
                {src: 'img/ecommece/login.webp', alt: ''},
                {src: 'img/ecommece/register.webp', alt: ''},
                {src: 'img/ecommece/homepage.webp', alt: ''},
                {src: 'img/ecommece/product.webp', alt: ''},
                {src: 'img/ecommece/cart.webp', alt: ''},
                {src: 'img/ecommece/checkout.webp', alt: ''},
                {src: 'img/ecommece/invoice.webp', alt: ''},

    ]
    },
  
    TicketMaster: {
      title: 'Ticket Master',
      description: 'A cinema ticket booking system with seat selection, payment gateway integration, and printable tickets.',
      images: [
        {src: 'img/ticket master/udashboard.webp', alt: ''},
        {src: 'img/ticket master/moviedetail.webp', alt: ''},
        {src: 'img/ticket master/showtime.webp', alt: ''},
        {src: 'img/ticket master/seatselect.webp', alt: ''},
        {src: 'img/ticket master/paymentoption.webp', alt: ''},
        {src: 'img/ticket master/onlinepayment.webp', alt: ''},
        {src: 'img/ticket master/paymentconfirm.webp', alt: ''},
        {src: 'img/ticket master/ticketprint.webp', alt: ''},
      ]
    },
    BookHeaven: {
      title: 'Book Heaven',
description: 'An online book rental platform with user-friendly UI, security deposit tracking, and overdue handling.',
      images: [
           {src: 'img/book heave/ba1.webp', alt: ''},
        {src: 'img/book heave/bk2.webp', alt: ''},
        {src: 'img/book heave/bk3.webp', alt: ''},
        {src: 'img/book heave/bk4.webp', alt: ''},
        {src: 'img/book heave/bk5.webp', alt: ''},
        {src: 'img/book heave/bk6.webp', alt: ''},
        {src: 'img/book heave/ba1.webp', alt: ''},
        {src: 'img/book heave/ba2.webp', alt: ''},
        {src: 'img/book heave/ba3.webp', alt: ''},
        {src: 'img/book heave/ba4.webp', alt: ''},
        {src: 'img/book heave/ba5.webp', alt: ''},
        ]
    },
    portfolioWebsite: {
      title: 'Portfolio Website',
      description: 'Personal website showcasing projects, skills, and contact information with responsive design and modern UI/UX elements.',
      images: [
                {src: 'img/my project/homepage.webp', alt: ''},
                {src: 'img/my project/about.webp', alt: ''},
                {src: 'img/my project/project.webp', alt: ''},
                {src: 'img/my project/projetimg.webp', alt: ''},
                {src: 'img/my project/contactus.webp', alt: ''},

    ]
    }
  };

  // Modal Elements
  const modalOverlay = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalMainImage = document.getElementById('modalMainImage');
  const modalThumbnailContainer = document.getElementById('modalThumbnailContainer');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  let currentImageIndex = 0;

  // Function to open modal with project data
  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    // Clear thumbnails
    modalThumbnailContainer.innerHTML = '';

    // Add thumbnails
    data.images.forEach((imgData, index) => {
      const thumbImg = document.createElement('img');
      thumbImg.src = imgData.src;
      thumbImg.alt = imgData.alt;
      thumbImg.tabIndex = 0;
      thumbImg.className = index === 0 ? 'selected' : '';
      thumbImg.addEventListener('click', () => {
        setMainImage(index);
      });
      thumbImg.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setMainImage(index);
        }
      });
      modalThumbnailContainer.appendChild(thumbImg);
    });

    currentImageIndex = 0;
    setMainImage(0);
    modalOverlay.classList.add('active');
    // Focus modal for accessibility
    modalOverlay.querySelector('.modal').focus();
    // Disable scroll on body when modal is open
    document.body.style.overflow = 'hidden';
  }

  // Function to set main image in modal
  function setMainImage(index) {
    const data = projectsData[document.querySelector('.modal-overlay.active')?.dataset.currentProject];
    if (!data) return;

    currentImageIndex = index;
    // modalMainImage.src = data.images[index].src;
    modalMainImage.src = data.images[index].src + '?t=' + new Date().getTime();

    modalMainImage.alt = data.images[index].alt;


    // Update thumbnails selected state
    Array.from(modalThumbnailContainer.children).forEach((thumb, i) => {
      thumb.classList.toggle('selected', i === index);
    });
  }

  // Function to close modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    // Enable scroll
    document.body.style.overflow = '';
    // Return focus to last focused project card (optional)
    if(lastFocusedProjectCard) {
      lastFocusedProjectCard.focus();
    }
  }

  // To store last focused project card for accessibility
  let lastFocusedProjectCard = null;

  // Add click event listeners to project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.projectId;
      if (projectId) {
        lastFocusedProjectCard = card;
        modalOverlay.dataset.currentProject = projectId;
        openModal(projectId);
      }
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const projectId = card.dataset.projectId;
        if (projectId) {
          lastFocusedProjectCard = card;
          modalOverlay.dataset.currentProject = projectId;
          openModal(projectId);
        }
      }
    });
  });

  // Close modal listeners
  modalCloseBtn.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeModal();
    }
  });
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
