// ===== Typing Effect =====
const typingTexts = ["Front-end Developer", "Future Full-Stack Developer", "Creative Coder", "Space Lover"];
let currentTextIndex = 0;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000;

function typeText() {
    const textElement = document.getElementById('typingText');
    const currentText = typingTexts[currentTextIndex];

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            textElement.innerHTML = text.substring(0, i + 1);
            setTimeout(() => typeWriter(text, i + 1, callback), typingSpeed);
        } else {
            setTimeout(callback, pauseTime);
        }
    }

    function deleteWriter(text, i, callback) {
        if (i >= 0) {
            textElement.innerHTML = text.substring(0, i);
            setTimeout(() => deleteWriter(text, i - 1, callback), deletingSpeed);
        } else {
            callback();
        }
    }

    typeWriter(currentText, 0, () => {
        deleteWriter(currentText, currentText.length, () => {
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            setTimeout(typeText, 500);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);
});


// ===== Smooth Scrolling and Mobile Menu Close =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile menu (just navLinks)
        document.getElementById('navLinks').classList.remove('active');
    });
});


// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
    }
});


// ===== Form Submission =====
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('.btn');
        const originalText = btn.textContent;

        btn.textContent = "Message Sent!";
        btn.style.background = "linear-gradient(to right, #00c853, #64ffda)";

        setTimeout(() => {
            form.reset();
            btn.textContent = originalText;
            btn.style.background = "";
        }, 3000);
    });
}


// ===== Animation on Scroll =====
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        observer.observe(section);
    });

    const projectCards = document.querySelectorAll('.project-card');
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeIn 1s ease forwards';
                }, index * 200);
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = 0;
        projectObserver.observe(card);
    });
});
``