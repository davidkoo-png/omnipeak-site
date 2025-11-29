/**
 * Omnipeak Technology Consulting - Main JavaScript
 * 
 * Handles:
 * - Mobile navigation toggle
 * - Header scroll effects
 * - Smooth scroll for anchor links
 * - Form validation feedback
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // --------------------------------------------------------------------------
  // Mobile Navigation Toggle
  // --------------------------------------------------------------------------
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('nav__toggle--open');
      navList.classList.toggle('nav__list--open');
      
      // Update accessibility attributes
      const isOpen = navList.classList.contains('nav__list--open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navList.setAttribute('aria-hidden', !isOpen);
    });
    
    // Close mobile menu when clicking a link
    const navLinks = navList.querySelectorAll('.nav__link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.classList.remove('nav__toggle--open');
        navList.classList.remove('nav__list--open');
        navToggle.setAttribute('aria-expanded', 'false');
        navList.setAttribute('aria-hidden', 'true');
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navToggle.contains(event.target) || navList.contains(event.target);
      if (!isClickInsideNav && navList.classList.contains('nav__list--open')) {
        navToggle.classList.remove('nav__toggle--open');
        navList.classList.remove('nav__list--open');
        navToggle.setAttribute('aria-expanded', 'false');
        navList.setAttribute('aria-hidden', 'true');
      }
    });
  }
  
  // --------------------------------------------------------------------------
  // Header Scroll Effect
  // --------------------------------------------------------------------------
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  
  if (header) {
    function updateHeader() {
      const currentScrollY = window.scrollY;
      
      // Add shadow when scrolled
      if (currentScrollY > 10) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
      
      lastScrollY = currentScrollY;
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateHeader();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Initial check
    updateHeader();
  }
  
  // --------------------------------------------------------------------------
  // Smooth Scroll for Anchor Links
  // --------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        event.preventDefault();
        
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // --------------------------------------------------------------------------
  // Contact Form Enhancement
  // --------------------------------------------------------------------------
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    // Add visual feedback on input focus
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(function(input) {
      // Add focus class to parent for styling if needed
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('form-group--focused');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('form-group--focused');
        
        // Add filled class if input has value
        if (this.value.trim() !== '') {
          this.parentElement.classList.add('form-group--filled');
        } else {
          this.parentElement.classList.remove('form-group--filled');
        }
      });
    });
    
    // Form submission handling (for Formspree)
    contactForm.addEventListener('submit', function(event) {
      const submitButton = contactForm.querySelector('button[type="submit"]');
      
      if (submitButton) {
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
      }
      
      // Form will submit normally to Formspree
      // Formspree handles the redirect/thank you page
    });
  }
  
  // --------------------------------------------------------------------------
  // Set Active Navigation Link
  // --------------------------------------------------------------------------
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(function(link) {
      const linkPath = link.getAttribute('href');
      
      // Check if link matches current page
      if (currentPath.endsWith(linkPath) || 
          (currentPath === '/' && linkPath === 'index.html') ||
          (currentPath.endsWith('/') && linkPath === 'index.html')) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }
  
  setActiveNavLink();
  
  // --------------------------------------------------------------------------
  // Intersection Observer for Scroll Animations
  // --------------------------------------------------------------------------
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(function(element) {
      observer.observe(element);
    });
  }
  
  // --------------------------------------------------------------------------
  // Current Year for Footer
  // --------------------------------------------------------------------------
  const yearSpan = document.querySelector('.current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
});

/**
 * Utility: Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
