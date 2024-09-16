document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imagecontainer img');

    function checkSlide() {
        images.forEach(image => {
            const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
            const imageBottom = image.offsetTop + image.height;
            const isHalfShown = slideInAt > image.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;

            if (isHalfShown && isNotScrolledPast) {
                image.classList.add('slide-in');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    checkSlide(); // Run on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const aboutNavLink = document.querySelector('a[href="#about"]');

    window.addEventListener('scroll', function() {
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            aboutNavLink.classList.add('active');
        } else {
            aboutNavLink.classList.remove('active');
        }
    });
});