document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last modification : " + document.lastModified;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (hamburger.textContent === '☰') {
        hamburger.textContent = '✖'; 
    } else {
        hamburger.textContent = '☰'; 
    }
});