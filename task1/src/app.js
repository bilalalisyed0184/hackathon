// Immediately Invoked Function Expression (IIFE) to create a local scope
(function () {
    // Selecting necessary DOM elements
    var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    var skillsSection = document.getElementById("skillsSection");
    // Boolean variable to track visibility of Skills section
    var isSkillsVisible = true;
    // Function to toggle visibility
    var toggleSkillsSection = function () {
        if (isSkillsVisible) {
            skillsSection.style.display = "none"; // Hide the skills section
            toggleSkillsBtn.textContent = "Show Skills Section"; // Update button text
        }
        else {
            skillsSection.style.display = "block"; // Show the skills section
            toggleSkillsBtn.textContent = "Hide Skills Section"; // Update button text
        }
        isSkillsVisible = !isSkillsVisible; // Toggle the boolean state
    };
    // Adding event listener to the button
    toggleSkillsBtn.addEventListener("click", toggleSkillsSection);
})();
