// JavaScript to detect scroll and change navbar opacity
window.addEventListener('scroll', function() {
    const nav = document.querySelector('navigation');
    
    // Add the 'scrolled' class when the page is scrolled down
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});