
function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("show");
}

document.addEventListener("scroll", () => {
    const targetSection = document.querySelector("#cartoon-trigger-autobiography"); // Replace with your target section ID
    const helperCartoon = document.querySelector("#helper-cartoon");

    const sectionTop = targetSection.getBoundingClientRect().top;
    const sectionBottom = targetSection.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight && sectionBottom > 0) {
        helperCartoon.classList.add("visible"); // Show the cartoon
    } else {
        helperCartoon.classList.remove("visible"); // Hide the cartoon
    }
});




document.addEventListener("scroll", () => {
    const targetSection = document.querySelector("#software-development"); // Replace with your target section ID
    const helperCartoon = document.querySelector("#helper-cartoon");
    const speechBubble = helperCartoon.querySelector(".speech-bubble");

    const sectionTop = targetSection.getBoundingClientRect().top;
    const sectionBottom = targetSection.getBoundingClientRect().bottom;

    // Show or hide the cartoon based on scroll position
    if (sectionTop < window.innerHeight && sectionBottom > 1000) {
        helperCartoon.classList.add("visible"); // Show the cartoon
    } else {
        helperCartoon.classList.remove("visible"); // Hide the cartoon
    }

    // Automatically scroll the speech bubble content faster
    if (speechBubble) {
        const maxScroll = speechBubble.scrollHeight - speechBubble.clientHeight;
        const scrollPercentage = window.scrollY / document.body.scrollHeight;

        // Multiply scrollPercentage by a factor to increase speed
        const speedFactor = 5; // Adjust this value for faster scrolling
        speechBubble.scrollTop = scrollPercentage * maxScroll * speedFactor;
    }
});