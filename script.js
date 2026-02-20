// Typed.js
new Typed(".text", {
    strings: ["Frontend Developer", "Student", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// EmailJS init
emailjs.init("62c0qOufYuSkAnpZv"); // 🔴 replace

// Form handling
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔥 THIS STOPS PAGE JUMP

    emailjs.sendForm(
        "service_q42cjo5",   // 🔴 replace
        "template_stwd7nl",  // 🔴 replace
        this
    )
    .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        alert("❌ Failed to send message");
        console.error(error);
    });
});

// SCROLL TO TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ACTIVE MENU ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
