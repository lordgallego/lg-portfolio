/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)  =>{
    el.addEventListener('click', toggleSkills)

})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.projects__modal'),
      modalBtns = document.querySelectorAll('.projects__button'),
      modalCloses = document.querySelectorAll('.projects__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPaper = new Swiper('.paper__container', {
    cssMode: true,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
  });

/*==================== WORK IMAGES SWIPER ====================*/
let swiperWork = new Swiper('.work-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 1,
        }
    }
  });

/*==================== TALENTFLOW ONBOARDING SWIPER ====================*/
let swiperTalentflow = new Swiper('.talentflow-swiper', {
    loop: true,
    loopFillGroupWithBlank: false,
    grabCursor: true,
    spaceBetween: 0,
    
    navigation: {
      nextEl: '.talentflow-swiper .swiper-button-next',
      prevEl: '.talentflow-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.talentflow-swiper .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 1,
        }
    }
  });

/*==================== AUTOMATION WORKFLOWS SWIPER ====================*/
let swiperAutomation = new Swiper('.automation-swiper', {
    loop: true,
    loopFillGroupWithBlank: false,
    grabCursor: true,
    spaceBetween: 0,
    
    navigation: {
      nextEl: '.automation-swiper .swiper-button-next',
      prevEl: '.automation-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.automation-swiper .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        568:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 1,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[data-id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('data-id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== CONTACT FORM VALIDATIONS ====================*/ 
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function validateName(){
    var name = document.getElementById('fullName').value;

    if(name.length == 0){
        nameError.innerHTML = 'Full name is required!';
        return false;
    }
    if( !name.match(/[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/) ){
        nameError.innerHTML = 'Enter full name!';
        return false;
    }
    nameError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email_id').value;

    if(email.length == 0){
        emailError.innerHTML = 'A valid email address is required!';
        return false;
    }
    // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        emailError.innerHTML = 'Invalid email!';
        return false;
    }
    emailError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if (left>0){
        messageError.innerHTML = left + ' more characters are required!';
        return false;
    }
    messageError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

/*==================== EMAIL SERVICE ====================*/ 
// function SendMail(){

//     if(!validateName() || !validateEmail() || !validateMessage() ){
//         // alert("Please fix the errors to send a message!");
//         swal("Sorry!", "Please fix the errors to send a message!", "warning");
//         return false;
//     }

//     var params = {
//         from_name : document.getElementById("fullName").value,
//         email_id : document.getElementById("email_id").value,
//         subject : document.getElementById("subject").value,
//         message : document.getElementById("message").value
//     }
//     emailjs.send("service_4ajtfo5", "template_ryff15a", params).then(function (res){
//         // alert("Success! " + res.status);
//         // alert("Your message has been sent successfully!");
//         swal("Success!", "Your message has been sent!", "success");
//     })
// }
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const sendButton = document.getElementById('sendButton');
    const toastContainer = document.getElementById('toast-container');
    const toastMessage = document.getElementById('toast-message');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json' // Request JSON response
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Expecting a JSON response from Formspree on success
            } else {
                throw new Error('Form submission failed.');
            }
        })
        .then(data => {
            // If Formspree successfully processed the form and likely sends back a JSON response (check Formspree's documentation for the exact success response)
            toastMessage.textContent = 'Message sent successfully!';
            toastMessage.className = 'toast-message show';
            setTimeout(() => {
                toastMessage.className = 'toast-message hide';
                form.reset();
            }, 3000);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
    });
});

const filterButtons = document.querySelectorAll('.filter__btn');
const paperCards = document.querySelectorAll('.paper__card');
const loadMoreBtn = document.querySelector('.load-more-btn');
let visibleCards = 6; // Initial number of visible cards per filter

// Function to update the visibility of the "Load More" button
function updateLoadMoreVisibility(filteredCards) {
    // If there are more hidden cards, show the "Load More" button
    const hiddenCards = filteredCards.filter(card => card.classList.contains('hidden'));
    if (hiddenCards.length > 0) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

// Function to show/hide papers based on filter and reset visible cards
function filterPapers(filter) {
    let filteredCards = [];

    // Show or hide cards based on the filter
    paperCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden'); // Show the card
            filteredCards.push(card);
        } else {
            card.classList.add('hidden'); // Hide the card
        }
    });

    // Initially hide all papers after the visible limit
    filteredCards.forEach((card, index) => {
        if (index >= visibleCards) {
            card.classList.add('hidden');
        } else {
            card.classList.remove('hidden');
        }
    });

    // Update "Load More" button visibility
    updateLoadMoreVisibility(filteredCards);
}

// Set up event listeners for filter buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(button => button.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        filterPapers(filter); // Filter papers based on the clicked filter
    });
});

// Load more papers on "Load More" button click
loadMoreBtn.addEventListener('click', () => {
    const activeFilter = document.querySelector('.filter__btn.active').getAttribute('data-filter');
    const hiddenCards = [...document.querySelectorAll('.paper__card.hidden')].filter(card => activeFilter === 'all' || card.getAttribute('data-category') === activeFilter);
    const limit = 3; // Number of papers to show per click

    // Show the next batch of hidden papers
    hiddenCards.forEach((card, index) => {
        if (index < limit) {
            card.classList.remove('hidden');
        }
    });

    // Update the visibility of the "Load More" button after loading more cards
    const filteredCards = [...paperCards].filter(card => activeFilter === 'all' || card.getAttribute('data-category') === activeFilter);
    updateLoadMoreVisibility(filteredCards);
});

// Initialize the page to show only the first 6 papers on load
document.addEventListener('DOMContentLoaded', () => {
    filterPapers('all'); // Initialize with "all" filter on page load
});

/*==================== PORTFOLIO INTERACTIVE FEATURES ====================*/
// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .portfolio__item {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize portfolio features after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    
    if (portfolioItems.length > 0) {
        // Intersection Observer for portfolio animations
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    portfolioObserver.unobserve(entry.target);
                    
                    // Load iframe when item comes into view
                    const iframe = entry.target.querySelector('.portfolio__iframe');
                    if (iframe && !iframe.classList.contains('loaded')) {
                        loadIframe(iframe);
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        portfolioItems.forEach(item => {
            portfolioObserver.observe(item);
        });

        // Add click ripple effect to portfolio items
        portfolioItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Don't trigger ripple if clicking on the button
                if (e.target.closest('.portfolio__button')) {
                    return;
                }
                
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
});

// Function to handle iframe loading
function loadIframe(iframe) {
    // Set a timeout to show iframe
    const timeout = setTimeout(() => {
        if (!iframe.classList.contains('loaded')) {
            // If iframe hasn't loaded after 5 seconds, still try to show it
            iframe.classList.add('loaded');
        }
    }, 5000);
    
    // Try to detect if iframe loaded successfully
    iframe.addEventListener('load', () => {
        clearTimeout(timeout);
        iframe.classList.add('loaded');
    });
    
    // Handle iframe errors (X-Frame-Options blocking)
    iframe.addEventListener('error', () => {
        clearTimeout(timeout);
        // Still show the iframe even if there's an error
        iframe.classList.add('loaded');
    });
    
    // For cross-origin iframes, we can't detect load events reliably
    // So we'll show the iframe after a delay and let the browser handle it
    setTimeout(() => {
        if (!iframe.classList.contains('loaded')) {
            iframe.classList.add('loaded');
        }
    }, 2000);
}

/*==================== ENHANCED SCROLL ANIMATIONS ====================*/
// Smooth scroll with offset for fixed header
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

/*==================== ENHANCED INTERACTIVE FEATURES ====================*/
// Click-based interactivity for portfolio items
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't activate if clicking on the button or link
            if (e.target.closest('.portfolio__button') || e.target.closest('a')) {
                return;
            }
            
            // Remove active class from all items
            portfolioItems.forEach(i => {
                if (i !== this) {
                    i.classList.remove('active');
                }
            });
            
            // Toggle active class on clicked item
            this.classList.toggle('active');
            
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Close portfolio when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.portfolio__item')) {
            portfolioItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});

/*==================== IMAGE LAZY LOADING OPTIMIZATION ====================*/
// Handle image loading for better performance
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Fallback for browsers that don't support lazy loading
        if (!('loading' in HTMLImageElement.prototype)) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });
            observer.observe(img);
        }
    });
});

// Add typing animation to home title (optional enhancement)
const homeTitle = document.querySelector('.home__title');
if (homeTitle) {
    const text = homeTitle.textContent;
    homeTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            homeTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Only run on first load
    if (sessionStorage.getItem('typed') !== 'true') {
        setTimeout(() => {
            typeWriter();
            sessionStorage.setItem('typed', 'true');
        }, 500);
    } else {
        homeTitle.textContent = text;
    }
}
