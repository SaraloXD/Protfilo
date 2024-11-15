// Smooth scrolling for navigation links (update to handle cross-page links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('header');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

// Skill hover effect
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#f0f0f0';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'transparent';
    });
});

const projects = [
    {
        title: 'E-commerce Website',
        description: 'A fully functional e-commerce website built with HTML, CSS, and JavaScript.',
        image: '../images/ecommerce.jpeg'
    },
    {
        title: 'Task Manager App',
        description: 'A Java-based desktop application for managing tasks and to-do lists.',
        image: '../images/todo.jpeg'
    },
    {
        title: 'Data Analysis Tool',
        description: 'A Python script for analyzing and visualizing large datasets.',
        image: '../images/ana.jpeg'
    }
];

const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});




// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
