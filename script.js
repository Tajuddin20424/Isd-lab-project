// const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.querySelector("#menu-close-button");

// menuOpenButton.addEventListener("click", () => {
//     Toggle mobile menu visibility
//     document.body.classList.toggle("show-mobile-menu");
// });

// Close menu when the close button is clicked
// menuCloseButton.addEventListener("click", () => menuOpenButton.click ()); 



/* Header / Navbar and Hero section part start */

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/* Header / Navbar and Hero section part end */

// About section part start

// Add animations when the section comes into view
document.addEventListener("DOMContentLoaded", () => {
    const aboutUsSection = document.querySelector(".about-us");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutUsSection.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(aboutUsSection);
  });
  
  // Social Icon Hover Effect
  const socialIcons = document.querySelectorAll(".social-icons a");
  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.style.color = "#ff5500";
    });
    icon.addEventListener("mouseout", () => {
      icon.style.color = "#555";
    });
  });


  
// About section part end


//  Menu section part start 

// Add hover effects with JavaScript (optional)
// document.addEventListener("DOMContentLoaded", function () {
//     const menuItems = document.querySelectorAll(".menu-list li");
//     menuItems.forEach((item) => {
//         item.addEventListener("mouseenter", () => {
//             item.style.transform = "scale(1.05)";
//         });
//         item.addEventListener("mouseleave", () => {
//             item.style.transform = "scale(1)";
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on ${item.querySelector("h3").textContent}`);
        });
    });
});


//  Menu section part end

// Initialize Swiper
// const swiper = new Swiper('.slider-wrapper', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 25,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // Responsive breakpoints
//     breakpoints: {
//         0: {
//             slidersPerView: 1
//         },
//         768: {
//             slidersPerView: 2
//         },
//         1024: {
//             slidersPerView: 3
//         }
//     }
//   });

// Testimonials section part start

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

const updateSlider = () => {
    slides.style.transform = `translateX(-${index * 100 / 3}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[Math.floor(index / 3)].classList.add('active');
};

const nextSlide = () => {
    index = (index + 1) % slide.length;
    updateSlider();
};

const prevSlide = () => {
    index = (index - 1 + slide.length) % slide.length;
    updateSlider();
};

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        index = parseInt(dot.getAttribute('data-index')) * 3;
        updateSlider();
    });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


// Testimonials section part end


 /* gallery section part start */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
      alert('You clicked on an image!');
  });
});

 /* gallery section part end */