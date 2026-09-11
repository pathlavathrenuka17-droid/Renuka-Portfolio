// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Reveal sections while scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Button click effect
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});

// Typing effect
const text = document.querySelector(".hero h2");

if (text) {
    const originalText = text.textContent;
    text.textContent = "";

    let index = 0;

    function typeText() {
        if (index < originalText.length) {
            text.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeText, 80);
        }
    }

    typeText();
}