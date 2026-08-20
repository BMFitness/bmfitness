


const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".hero h1",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".hero p",{
    ...scrollRevealOption,
    delay:500,
});
const x = document.querySelectorAll(".content h2 span");
x.forEach((span, index)=> {
    span.style.animationDelay = `${index * 0.6}s`;
})


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => startCounting(counter), 20);
    } else {
      counter.innerText = target;
    }
  };

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        counters.forEach(counter => startCounting(counter));
        animated = true;
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
});
gsap.registerPlugin(ScrollTrigger);

// Timeline for Transitioning from Section 1 to Section 2
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#garaya",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true, // Pins Section 1 until rotation and movement finish
    pinSpacing: true
  }
});

// Rotate 360 degrees while moving to the left side of Section 2
tl.to("#treadmill-wrapper", {
  x: "-25vw",
  rotation: 360, // Full rotation animation
  scale: 0.8,
  ease: "power1.inOut"
});

gsap .from(".icon-box", {
    opacity: 0,
    y: 50,
    duration: 1,
})
const mediaBtn = document.querySelector(".media-btn");
mediaBtn.addEventListener("mouseenter", () => {
  gsap.to(".media-btn", {
    scale: 1.05,
    duration: 0.3,
    y: -3,
    ease: "power2.out"
  });
});
mediaBtn.addEventListener("mouseleave", () => {
  gsap.to(".media-btn", {
    scale: 1,
    y: 0,
    duration: 0.3,
    ease: "power2.out"
  });
});
mediaBtn.addEventListener("mousedown", () => {
  gsap.to(".media-btn", {
    scale: 0.95,
    duration: 0.1,
  });
});
mediaBtn.addEventListener("mouseup", () => {
  gsap.to(".media-btn", {
    scale: 1.05,
    duration: 0.2,
    ease: "back.out(1.7)"
  });
});










   <div class="footer-wrapper">
                <h1>Icons by <a href="https://fontawesome.com" target="_blank" rel="noopener">Font Awesome</a></h1>
                <h1>Fonts by <a href="https://fonts.google.com" target="_blank" rel="noopener">Google Fonts</a></h1>
                <h1>Illustrations by <a href="https://undraw.co" target="_blank" rel="noopener">unDraw</a></h1>
            </div>

            <hr class="divider">
            <div class="webright">
                <div class="webright-left">
                    ©2026 B.M Fitness Maintenance Services. All Rights Reserved.
                </div>
                <div class="webright-right">
                    <a href="#">Terms</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Privacy Policy</a>
                </div>
             
            </div>