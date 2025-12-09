/**
 * Personal Portfolio - Main JavaScript
 * Handles navigation, scroll effects, and user interactions
 */

// ===============================================
// Mobile Navigation Menu Toggle
// ===============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

/**
 * Toggle mobile navigation menu open/closed state
 */
navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    
    navToggle.classList.toggle('is-active');
    navMenu.classList.toggle('is-open');
    
    // Update ARIA attribute for accessibility
    navToggle.setAttribute('aria-expanded', !isExpanded);
});

/**
 * Close mobile menu when a navigation link is clicked
 */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// ===============================================
// Header Scroll Effect
// ===============================================

const siteHeader = document.getElementById('siteHeader');
let previousScrollPosition = 0;

/**
 * Add styling to header when user scrolls down the page
 */
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > 100) {
        siteHeader.classList.add('is-scrolled');
    } else {
        siteHeader.classList.remove('is-scrolled');
    }

    previousScrollPosition = currentScrollPosition;
});

// ===============================================
// Active Navigation Link Highlighting
// ===============================================

const sectionElements = document.querySelectorAll('section');
const navigationLinks = document.querySelectorAll('.nav-link');

/**
 * Highlight the active navigation link based on scroll position
 */
window.addEventListener('scroll', () => {
    let currentSectionId = '';

    // Determine which section is currently in view
    sectionElements.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport (with 200px offset for better UX)
        if (pageYOffset >= sectionTop - 200) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Update active state on navigation links
    navigationLinks.forEach(link => {
        link.classList.remove('is-active');
        
        // Extract section ID from href (remove #)
        const linkTarget = link.getAttribute('href').substring(1);
        
        if (linkTarget === currentSectionId) {
            link.classList.add('is-active');
        }
    });
});

// ===============================================
// Smooth Scrolling for Anchor Links
// ===============================================

const anchorLinks = document.querySelectorAll('a[href^="#"]');

/**
 * Enable smooth scrolling behavior for internal anchor links
 */
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
