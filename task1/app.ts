// Immediately Invoked Function Expression (IIFE) to create a local scope
(() => {
    // Selecting necessary DOM elements
    const toggleSkillsBtn: HTMLElement = document.getElementById("toggleSkillsBtn")!;
    const skillsSection: HTMLElement = document.getElementById("skillsSection")!;

    // Boolean variable to track visibility of Skills section
    let isSkillsVisible: boolean = true;

    // Function to toggle visibility
    const toggleSkillsSection = (): void => {
        if (isSkillsVisible) {
            skillsSection.style.display = "none"; // Hide the skills section
            toggleSkillsBtn.textContent = "Show Skills Section"; // Update button text
        } else {
            skillsSection.style.display = "block"; // Show the skills section
            toggleSkillsBtn.textContent = "Hide Skills Section"; // Update button text
        }
        isSkillsVisible = !isSkillsVisible; // Toggle the boolean state
    };

    // Adding event listener to the button
    toggleSkillsBtn.addEventListener("click", toggleSkillsSection);
})();
