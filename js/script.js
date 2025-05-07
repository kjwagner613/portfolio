document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#toggle-helpers");
    const helperCartoons = document.querySelectorAll(".helper-cartoon");
    let helpersVisible = true;

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            helpersVisible = !helpersVisible;
            helperCartoons.forEach((cartoon) => {
                cartoon.style.display = helpersVisible ? "block" : "none"; // 
            });
            toggleButton.textContent = helpersVisible ? "Hide Helpers" : "Show Helpers";
        });
    }
    document.getElementById('toggle-helpers').addEventListener('click', function () {
        const helpers = document.querySelectorAll('.helper-cartoon');
        const button = this;

        helpers.forEach(helper => {
            if (helper.style.display === 'none') {
                helper.style.display = 'block';
                button.textContent = 'Hide Helpers';
            } else {
                helper.style.display = 'none';
                button.textContent = 'Show Helpers';
            }
        });
    });

    document.addEventListener("scroll", () => {
        helperCartoons.forEach((cartoon) => {
            const sectionId = cartoon.dataset.section;
            const targetSection = document.querySelector(`#${sectionId}`);
            if (targetSection) {
                const sectionTop = targetSection.getBoundingClientRect().top;
                const sectionBottom = targetSection.getBoundingClientRect().bottom;
                if (sectionTop < window.innerHeight && sectionBottom > 0) {
                    cartoon.classList.add("visible");
                    const speechBubble = cartoon.querySelector(".speech-bubble");
                    if (speechBubble && !speechBubble.dataset.scrolling) {
                        speechBubble.dataset.scrolling = "true";
                        setTimeout(() => {
                            let scrollPosition = 0;
                            const scrollInterval = setInterval(() => {
                                scrollPosition += 1;
                                if (scrollPosition > speechBubble.scrollHeight - speechBubble.clientHeight) {
                                    clearInterval(scrollInterval);
                                    setTimeout(() => {
                                        scrollPosition = 0;
                                        speechBubble.scrollTop = scrollPosition;
                                        speechBubble.dataset.scrolling = "false";
                                    }, 10000);
                                } else {
                                    speechBubble.scrollTop = scrollPosition;
                                }
                            }, 10);
                        }, 3000);
                    }
                } else {
                    cartoon.classList.remove("visible");
                }
            }
        });
    });
});