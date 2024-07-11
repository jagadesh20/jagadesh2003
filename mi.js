// ScrollReveal animations
ScrollReveal().reveal('.hero h2', { delay: 800});
ScrollReveal().reveal('.hero p', { delay: 600 });
ScrollReveal().reveal('.hero img', { delay: 700 });
ScrollReveal().reveal('#slider', { delay: 800});

ScrollReveal().reveal('.booking__container', { delay: 600 });
ScrollReveal().reveal('.about__grid', { delay: 800});
ScrollReveal().reveal('.about__content', { delay: 700 });
ScrollReveal().reveal('.room__grid', { delay: 800 });

ScrollReveal().reveal('.intro__container', { delay: 1000 });
ScrollReveal().reveal('.feature__grid', { delay: 800 });
ScrollReveal().reveal('.news__grid', { delay: 700 });

ScrollReveal().reveal('.contact-form', { delay: 500 });
ScrollReveal().reveal('footer', { delay: 800 });

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const success = document.getElementById('success');

    if (name && email && message) {
        success.innerText = 'Message sent successfully!';
        success.style.color = 'green';
    } else {
        success.innerText = 'Please fill out all fields.';
        success.style.color = 'red';
    }
});