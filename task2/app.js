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
// Immediately Invoked Function Expression (IIFE) to create a local scope
(function () {
    // Selecting necessary DOM elements
    var resumeForm = document.getElementById("resumeForm");
    var resumeContainer = document.getElementById("resumeContainer");
    // Form fields
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var phoneField = document.getElementById("phone");
    var educationField = document.getElementById("education");
    var experienceField = document.getElementById("experience");
    var skillsField = document.getElementById("skills");
    // Function to handle form submission and dynamically generate resume
    var generateResume = function (event) {
        event.preventDefault();
        // Clear any existing content
        resumeContainer.innerHTML = '';
        // Create resume HTML
        var resumeHTML = "\n            <h2>".concat(nameField.value, "</h2>\n            <p><strong>Email:</strong> ").concat(emailField.value, "</p>\n            <p><strong>Phone:</strong> ").concat(phoneField.value, "</p>\n            <h3>Education</h3>\n            <p>").concat(educationField.value, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experienceField.value, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skillsField.value, "</p>\n        ");
        // Insert the generated resume into the container
        resumeContainer.innerHTML = resumeHTML;
    };
    // Adding event listener to the form submission
    resumeForm.addEventListener("submit", generateResume);
})();
