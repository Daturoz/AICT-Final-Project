/**
 * Main JavaScript File
 * Handles animations, form validation, and interactive features
 */

// ==========================================
// Intersection Observer for Scroll Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
});

// ==========================================
// Counter Animation
// ==========================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 16ms per frame
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Start counters when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    const target = parseInt(entry.target.dataset.target);
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }
});

// ==========================================
// Form Validation & Submission
// ==========================================
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous errors
    clearFormErrors();
    
    // Validate inputs
    let isValid = true;
    
    if (name.length < 3) {
        showError('nameError', 'Name must be at least 3 characters long');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (subject.length < 5) {
        showError('subjectError', 'Subject must be at least 5 characters long');
        isValid = false;
    }
    
    if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
        showSuccessMessage('Thank you for your message! I will get back to you soon.');
        document.querySelector('.contact-form').reset();
        
        // Log form data (in real app, send to server)
        console.log({
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearFormErrors() {
    document.querySelectorAll('.text-danger').forEach(el => {
        el.textContent = '';
    });
}

function showSuccessMessage(message) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="fas fa-check-circle"></i> ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        // Auto dismiss after 5 seconds
        setTimeout(() => {
            const alert = messageDiv.querySelector('.alert');
            if (alert) {
                alert.remove();
            }
        }, 5000);
    }
}

// ==========================================
// Newsletter Subscription
// ==========================================
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (validateEmail(email)) {
        const messageDiv = document.getElementById('newsletter-message');
        messageDiv.innerHTML = `
            <div class="alert alert-success mt-3">
                <i class="fas fa-check-circle"></i> Thank you for subscribing!
            </div>
        `;
        event.target.reset();
        
        // Log subscription
        console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() });
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.innerHTML = '';
        }, 5000);
    } else {
        const messageDiv = document.getElementById('newsletter-message');
        messageDiv.innerHTML = `
            <div class="alert alert-danger mt-3">
                <i class="fas fa-exclamation-circle"></i> Please enter a valid email address.
            </div>
        `;
    }
}

// Alternative newsletter handler for blog
function handleBlogNewsletter(event) {
    event.preventDefault();
    handleNewsletterSubmit(event);
}

// ==========================================
// Portfolio Gallery Filtering
// ==========================================
function filterProjects(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
            setTimeout(() => {
                item.style.opacity = '1';
            }, 10);
        } else {
            item.style.opacity = '0';
            setTimeout(() => {
                item.classList.add('hidden');
            }, 300);
        }
    });
    
    // Log filter action
    console.log(`Filtered portfolio by category: ${category}`);
}

// ==========================================
// Blog Search
// ==========================================
function searchBlog() {
    const searchTerm = document.getElementById('searchBlog').value.toLowerCase().trim();
    const blogCards = document.querySelectorAll('.blog-card');
    
    let foundCount = 0;
    
    blogCards.forEach(card => {
        const title = card.querySelector('h5').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
            card.style.opacity = '1';
            foundCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Search: "${searchTerm}" found ${foundCount} results`);
}

// ==========================================
// Smooth Scrolling for Anchor Links
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ==========================================
// Active Navigation Link
// ==========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ==========================================
// Mobile Menu Close
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    });
});

// ==========================================
// Scroll to Top Button (if needed)
// ==========================================
function showScrollToTop() {
    if (window.scrollY > 300) {
        let scrollBtn = document.getElementById('scrollToTop');
        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.id = 'scrollToTop';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                cursor: pointer;
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
            `;
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            document.body.appendChild(scrollBtn);
        }
        scrollBtn.style.opacity = '1';
        scrollBtn.style.pointerEvents = 'auto';
    } else {
        const scrollBtn = document.getElementById('scrollToTop');
        if (scrollBtn) {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.pointerEvents = 'none';
        }
    }
}

window.addEventListener('scroll', showScrollToTop);

// ==========================================
// Keyboard Navigation
// ==========================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    }
});

// ==========================================
// Form Input Focus Effects
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transition = 'border-color 0.3s, box-shadow 0.3s';
        });
    });
});

// ==========================================
// Development Console Messages
// ==========================================
console.log('%c Welcome to Professional Portfolio 🎉', 'font-size: 20px; font-weight: bold; color: #007bff;');
console.log('%c Built with HTML5, CSS3, Bootstrap 5, and JavaScript', 'font-size: 14px; color: #6c757d;');
console.log('%c Made with ❤️ by Daturoz', 'font-size: 12px; color: #999;');
