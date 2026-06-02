document.querySelector(".accordion").addEventListener("click", function() {
    const panel = this.nextElementSibling;
    const span = this.querySelector("span");
    if (panel.style.display === "block") {
        panel.style.display = "none";
        span.textContent = "＋";
    } else {
        panel.style.display = "block";
        span.textContent = "－";
    }
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.container').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.style.opacity = '1';
        }
    });
});