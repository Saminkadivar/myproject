
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

  // Dark Mode Toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlElement = document.documentElement;
  const themeIcon = themeToggleBtn.querySelector('.material-icons');

  // Check for saved theme preference or default to light mode
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = 'light_mode';
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.removeAttribute('data-theme');
      themeIcon.textContent = 'dark_mode';
      localStorage.setItem('theme', 'light');
    }
  }

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Add click event listener to theme toggle button
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  // Add keyboard support for theme toggle
  themeToggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Initialize theme on page load
  initTheme();

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  scrollToTopBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

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
  // Contact form submission simulation (guarded if form exists)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you shortly.');
      contactForm.reset();
    });
  }

  // Project data for modal
  const projectsData = {
 laravelecommerce: {
      title: 'Laravel E-commerce',
      description: 'A Laravel-based E-commerce web application with authentication, product catalog, cart, checkout, and order management features.',
      images: [
{src: 'img/laravel%20project/homepage.png', alt: ''},
{src: 'img/laravel%20project/login.png', alt: ''},
{src: 'img/laravel%20project/register.png', alt: ''},
{src: 'img/laravel%20project/product.png', alt: ''},
{src: 'img/laravel%20project/search.png', alt: ''},
{src: 'img/laravel%20project/view.png', alt: ''},
{src: 'img/laravel%20project/cart.png', alt: ''},
{src: 'img/laravel%20project/checkout.png', alt: ''},
{src: 'img/laravel%20project/order.png', alt: ''},
{src: 'img/laravel%20project/invoice.png', alt: ''},
{src: 'img/laravel%20project/profile.png', alt: ''},
{src: 'img/laravel%20project/forgot.png', alt: ''},
{src: 'img/laravel%20project/admin/login.png', alt: ''},
{src: 'img/laravel%20project/admin/homepage.png', alt: ''},
{src: 'img/laravel%20project/admin/salereport.png', alt: ''},
{src: 'img/laravel%20project/admin/productview.png', alt: ''},
{src: 'img/laravel%20project/admin/addproduct.png', alt: ''},
{src: 'img/laravel%20project/admin/vendor.png', alt: ''},
{src: 'img/laravel%20project/admin/user.png', alt: ''},
{src: 'img/laravel%20project/admin/profile.png', alt: ''},
{src: 'img/laravel%20project/vendor/login.png', alt: ''},
{src: 'img/laravel%20project/vendor/register.png', alt: ''},
{src: 'img/laravel%20project/vendor/homepage.png', alt: ''},
{src: 'img/laravel%20project/vendor/order.png', alt: ''},
{src: 'img/laravel%20project/vendor/product.png', alt: ''},
{src: 'img/laravel%20project/vendor/addproduct.png', alt: ''},
{src: 'img/laravel%20project/vendor/report.png', alt: ''},
{src: 'img/laravel%20project/vendor/profle.png', alt: ''},

        

    ]
    },
  
    TicketMaster: {
      title: 'Ticket Master',
      description: 'A cinema ticket booking system with seat selection, payment gateway integration, and printable tickets.',
      images: [
        {src: 'img/ticket%20master/udashboard.webp', alt: ''},
        {src: 'img/ticket%20master/moviedetail.webp', alt: ''},
        {src: 'img/ticket%20master/showtime.webp', alt: ''},
        {src: 'img/ticket%20master/seatselect.webp', alt: ''},
        {src: 'img/ticket%20master/paymentoption.webp', alt: ''},
        {src: 'img/ticket%20master/onlinepayment.webp', alt: ''},
        {src: 'img/ticket%20master/paymentconfirm.webp', alt: ''},
        {src: 'img/ticket%20master/ticketprint.webp', alt: ''},
      ]
    },
    BookHeaven: {
      title: 'Book Heaven',
description: 'An online book rental platform with user-friendly UI, security deposit tracking, and overdue handling.',
      images: [
           {src: 'img/book%20heave/ba1.webp', alt: ''},
        {src: 'img/book%20heave/bk2.webp', alt: ''},
        {src: 'img/book%20heave/bk3.webp', alt: ''},
        {src: 'img/book%20heave/bk4.webp', alt: ''},
        {src: 'img/book%20heave/bk5.webp', alt: ''},
        {src: 'img/book%20heave/bk6.webp', alt: ''},
        {src: 'img/book%20heave/ba1.webp', alt: ''},
        {src: 'img/book%20heave/ba2.webp', alt: ''},
        {src: 'img/book%20heave/ba3.webp', alt: ''},
        {src: 'img/book%20heave/ba4.webp', alt: ''},
        {src: 'img/book%20heave/ba5.webp', alt: ''},
        ]
    },
    portfolioWebsite: {
      title: 'Portfolio Website',
      description: 'Personal website showcasing projects, skills, and contact information with responsive design and modern UI/UX elements.',
      images: [
                {src: 'img/my%20project/homepage.webp', alt: ''},
                {src: 'img/my%20project/about.webp', alt: ''},
                {src: 'img/my%20project/project.webp', alt: ''},
                {src: 'img/my%20project/projetimg.webp', alt: ''},
                {src: 'img/my%20project/contactus.webp', alt: ''},

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
  const modalMainImageWrapper = document.getElementById('modalMainImageWrapper');
  let currentImageIndex = 0;
  let currentProjectId = null;
  let slideInterval = null;

  // Function to open modal with project data
  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // track current project
    currentProjectId = projectId;
    modalOverlay.dataset.currentProject = projectId;

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

    // Ensure navigation buttons exist
    ensureNavButtons();
    // Start slideshow
    startSlideshow();
    modalOverlay.classList.add('active');
    // Focus modal for accessibility
    modalOverlay.querySelector('.modal').focus();
    // Disable scroll on body when modal is open
    document.body.style.overflow = 'hidden';
  }

  // Function to set main image in modal
  function setMainImage(index) {
    const data = currentProjectId ? projectsData[currentProjectId] : null;
    if (!data) return;

    currentImageIndex = index;
    // force image refresh to avoid caching artifacts
    modalMainImage.src = data.images[index].src + '?t=' + new Date().getTime();

    modalMainImage.alt = data.images[index].alt;


    // Update thumbnails selected state
    Array.from(modalThumbnailContainer.children).forEach((thumb, i) => {
      thumb.classList.toggle('selected', i === index);
    });
    // reset slideshow timer on manual change
    restartSlideshow();
  }

  function nextImage() {
    const data = currentProjectId ? projectsData[currentProjectId] : null;
    if (!data) return;
    const total = data.images.length;
    currentImageIndex = (currentImageIndex + 1) % total;
    setMainImage(currentImageIndex);
  }

  function prevImage() {
    const data = currentProjectId ? projectsData[currentProjectId] : null;
    if (!data) return;
    const total = data.images.length;
    currentImageIndex = (currentImageIndex - 1 + total) % total;
    setMainImage(currentImageIndex);
  }

  function ensureNavButtons() {
    if (!document.getElementById('modalPrevBtn')) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'nav-btn prev';
      prevBtn.id = 'modalPrevBtn';
      prevBtn.setAttribute('aria-label', 'Previous image');
      prevBtn.innerHTML = '<span class="material-icons">chevron_left</span>';
      prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
      modalMainImageWrapper.appendChild(prevBtn);
    }
    if (!document.getElementById('modalNextBtn')) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'nav-btn next';
      nextBtn.id = 'modalNextBtn';
      nextBtn.setAttribute('aria-label', 'Next image');
      nextBtn.innerHTML = '<span class="material-icons">chevron_right</span>';
      nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
      modalMainImageWrapper.appendChild(nextBtn);
    }
    // Click on main image advances to next
    modalMainImage.onclick = () => nextImage();
  }

  function startSlideshow() {
    stopSlideshow();
    slideInterval = setInterval(nextImage, 3000);
  }

  function stopSlideshow() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  function restartSlideshow() {
    if (slideInterval) {
      startSlideshow();
    }
  }

  // Function to close modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    stopSlideshow();
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
        openModal(projectId);
      }
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const projectId = card.dataset.projectId;
        if (projectId) {
          lastFocusedProjectCard = card;
          openModal(projectId);
        }
      }
    });
  });

  // Prevent card click when clicking GitHub link inside the card
  document.querySelectorAll('.project-github-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
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
    if (modalOverlay.classList.contains('active')) {
      if (e.key === 'ArrowRight') { e.preventDefault(); nextImage(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); prevImage(); }
    }
  });


// Select modal elements
const certificateModal = document.getElementById("certificateModal");
const certificateModalCloseBtn = document.getElementById("certificateModalCloseBtn");
const certificateModalTitle = document.getElementById("certificateModalTitle");
const certificateModalDescription = document.getElementById("certificateModalDescription");
const certificateModalImage = document.getElementById("certificateModalImage");

// Select all certificate cards
const certificateCards = document.querySelectorAll(".certificate-card");

// Add click event for each certificate card
certificateCards.forEach(card => {
  card.addEventListener("click", () => {
    // Get details from the clicked card
    const title = card.querySelector(".certificate-title").innerText;
    const desc = card.querySelector(".certificate-desc").innerText;
    const imgSrc = card.querySelector("img").getAttribute("src");
    const imgAlt = card.querySelector("img").getAttribute("alt");

    // Update modal content
    certificateModalTitle.innerText = title;
    certificateModalDescription.innerText = desc;
    certificateModalImage.src = imgSrc;
    certificateModalImage.alt = imgAlt;

    // Show modal
    certificateModal.classList.add("active");
  });
});

// Close modal on button click
certificateModalCloseBtn.addEventListener("click", () => {
  certificateModal.classList.remove("active");
});

// Close modal on overlay click
certificateModal.addEventListener("click", (e) => {
  if (e.target === certificateModal) {
    certificateModal.classList.remove("active");
  }
});

// Optional: close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certificateModal.classList.contains("active")) {
    certificateModal.classList.remove("active");
  }
});
