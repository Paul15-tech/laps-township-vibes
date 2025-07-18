
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navHamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navHamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navHamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navHamburger.classList.remove('active');
        });
    });

    // Smooth scrolling and active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Booking form functionality
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const bookingData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            date: formData.get('date'),
            time: formData.get('time'),
            message: formData.get('message')
        };

        // Send booking via WhatsApp
        sendBookingToWhatsApp(bookingData);
        
        // Show success message
        showSuccessMessage();
        bookingForm.reset();
    });

    function sendBookingToWhatsApp(bookingData) {
        const phoneNumber = '27606095887'; // WhatsApp number for LAPS Entertainment Centre
        
        // Create booking message
        let message = `🏢 *LAPS Entertainment Centre - New Booking Request*\n\n`;
        message += `👤 *Name:* ${bookingData.name}\n`;
        message += `📧 *Email:* ${bookingData.email}\n`;
        message += `📞 *Phone:* ${bookingData.phone}\n`;
        message += `🎯 *Service:* ${bookingData.service}\n`;
        message += `📅 *Date:* ${bookingData.date}\n`;
        message += `⏰ *Time:* ${bookingData.time}\n`;
        
        if (bookingData.message && bookingData.message.trim() !== '') {
            message += `💬 *Message:* ${bookingData.message}\n`;
        }
        
        message += `\n✨ Thank you for choosing LAPS Entertainment Centre!`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    }

    function showSuccessMessage() {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message show';
        successMessage.innerHTML = `
            <h3>Booking Request Prepared! 🎉</h3>
            <p>Your booking details have been prepared for WhatsApp. Please send the message to complete your booking request.</p>
            <p>We'll respond to confirm your appointment as soon as possible.</p>
        `;

        // Insert success message before the form
        const formContainer = document.querySelector('.booking-form-container');
        formContainer.insertBefore(successMessage, bookingForm);

        // Hide success message after 8 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
            successMessage.classList.add('hide');
            setTimeout(() => {
                successMessage.remove();
            }, 500);
        }, 8000);
    }

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', formattedDate);

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Hero buttons functionality
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.trim() === 'Book Now') {
                document.getElementById('booking').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (this.textContent.trim() === 'Our Services') {
                document.getElementById('services').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// WhatsApp functionality
function openWhatsApp() {
    const phoneNumber = '27606095887';
    const message = encodeURIComponent('Hello! I would like to know more about LAPS Entertainment Centre services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Get directions functionality
function getDirections() {
    const destination = encodeURIComponent('Moletji, Limpopo, South Africa');
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(googleMapsUrl, '_blank');
}

// Print functionality for pricing
function printPricing() {
    const printWindow = window.open('', '_blank');
    const pricingSection = document.getElementById('pricing');
    
    printWindow.document.write(`
        <html>
            <head>
                <title>LAPS Entertainment Centre - Pricing</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h2, h3 { color: #d97706; }
                    .pricing-grid { margin: 20px 0; }
                    .pricing-item { 
                        display: flex; 
                        justify-content: space-between; 
                        padding: 10px; 
                        border-bottom: 1px solid #eee; 
                    }
                    .price { font-weight: bold; color: #d97706; }
                    @media print {
                        body { margin: 0; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <h1>LAPS Entertainment Centre - Pricing</h1>
                <p>Contact: +27 60 609 5887 | info@lapsentertainment.co.za</p>
                <p>Location: Moletji, Limpopo, South Africa</p>
                <hr>
                ${pricingSection.innerHTML}
            </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact form functionality (if needed)
function submitContact() {
    alert('Thank you for your message! We will get back to you soon.');
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-top-btn';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #d97706;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});
