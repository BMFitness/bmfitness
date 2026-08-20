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








document.addEventListener("DOMContentLoaded", () => {
  const cars = document.querySelectorAll(".car");
  const centerDesc = document.getElementById("center-desc");
  const meter = document.getElementById("meter");
  const defaultText = "Hover over any card to view maintenance tips and protect your device.";

  cars.forEach((car, i) => {
    car.addEventListener("mouseenter", () => {
      const info = car.getAttribute("data-desc");
      if (centerDesc) centerDesc.innerText = info;
      if (meter) {
        meter.innerHTML = `<i class="fa-solid fa-shield-halved"></i> <span>Tip Impact: +${(i + 1) * 10}% Protection</span>`;
        meter.style.color = "#0984e3";
      }
    });

    car.addEventListener("mouseleave", () => {
      if (centerDesc) centerDesc.innerText = defaultText;
      if (meter) {
        meter.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Treadmill Status: 100%</span>`;
        meter.style.color = "#00b894";
      }
    });
  });
});









document.addEventListener('DOMContentLoaded', () => {
    // 1. تعريف العناصر من الـ DOM
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.navbar a');

    // 2. دالة فتح القائمة والـ Overlay
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.add('active');
            overlay.classList.add('active');
        });
    }

    // 3. دالة إغلاق القائمة والـ Overlay
    function closeSidebar() {
        navbar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // 4. الإغلاق عند الضغط على زر (X) أو الـ Overlay
    if (closeIcon) closeIcon.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // 5. الإغلاق أوتوماتيكياً عند الضغط على أي لينك داخل القائمة
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});