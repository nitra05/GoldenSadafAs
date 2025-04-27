// Пример простого кода для динамических эффектов на сайте
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");

    // Пример анимации для изображений (при прокрутке)
    images.forEach(img => {
        img.classList.add("opacity-0");
        img.classList.add("transition-opacity");
        img.classList.add("duration-500");

        window.addEventListener("scroll", () => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.classList.remove("opacity-0");
                img.classList.add("opacity-100");
            }
        });
    });
});
