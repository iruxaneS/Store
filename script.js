// Add interactivity if needed
// Example: Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});
