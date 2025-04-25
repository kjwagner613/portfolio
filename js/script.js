document.addEventListener("DOMContentLoaded", () => {
    // Toggle Helpers Button
    const toggleButton = document.querySelector("#toggle-helpers");
    const helperCartoons = document.querySelectorAll(".helper-cartoon");
    let helpersVisible = true; // Track visibility state

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            helpersVisible = !helpersVisible; // Toggle state

            helperCartoons.forEach((cartoon) => {
                cartoon.style.display = helpersVisible ? "block" : "none"; // Show or hide helpers
            });

            // Update button text
            toggleButton.textContent = helpersVisible ? "Hide Helpers" : "Show Helpers";
        });
    }

    // Scroll-Based Visibility for Helpers
    document.addEventListener("scroll", () => {
        helperCartoons.forEach((cartoon) => {
            const sectionId = cartoon.dataset.section; // Get the section ID from data-section
            const targetSection = document.querySelector(`#${sectionId}`);

            if (targetSection) {
                const sectionTop = targetSection.getBoundingClientRect().top;
                const sectionBottom = targetSection.getBoundingClientRect().bottom;

                // Show the cartoon if the section is in the viewport
                if (sectionTop < window.innerHeight && sectionBottom > 0) {
                    cartoon.classList.add("visible");

                    // Start scrolling the speech bubble after 3 seconds
                    const speechBubble = cartoon.querySelector(".speech-bubble");
                    if (speechBubble && !speechBubble.dataset.scrolling) {
                        speechBubble.dataset.scrolling = "true"; // Prevent multiple intervals
                        setTimeout(() => {
                            let scrollPosition = 0;
                            const scrollInterval = setInterval(() => {
                                scrollPosition += 1;
                                if (scrollPosition > speechBubble.scrollHeight - speechBubble.clientHeight) {
                                    clearInterval(scrollInterval); // Stop scrolling
                                    setTimeout(() => {
                                        scrollPosition = 0; // Reset scroll position after 10 seconds
                                        speechBubble.scrollTop = scrollPosition;
                                        speechBubble.dataset.scrolling = "false"; // Allow scrolling to restart
                                    }, 10000); // Pause for 10 seconds
                                } else {
                                    speechBubble.scrollTop = scrollPosition;
                                }
                            }, 10); // Adjust speed as needed
                        }, 3000); // Wait 3 seconds before starting
                    }
                } else {
                    cartoon.classList.remove("visible");
                }
            }
        });
    });
});