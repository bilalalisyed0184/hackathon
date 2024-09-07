// Immediately Invoked Function Expression (IIFE) to create a local scope for toggling skills section
(function () {
    var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    var skillsSection = document.getElementById("skillsSection");
    var isSkillsVisible = true;
    var toggleSkillsSection = function () {
        if (isSkillsVisible) {
            skillsSection.style.display = "none";
            toggleSkillsBtn.textContent = "Show Skills Section";
        }
        else {
            skillsSection.style.display = "block";
            toggleSkillsBtn.textContent = "Hide Skills Section";
        }
        isSkillsVisible = !isSkillsVisible;
    };
    toggleSkillsBtn.addEventListener("click", toggleSkillsSection);
})();
// Immediately Invoked Function Expression (IIFE) to create a local scope for generating and editing resume
(function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeContainer = document.getElementById("resumeContainer");
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var phoneField = document.getElementById("phone");
    var educationField = document.getElementById("education");
    var experienceField = document.getElementById("experience");
    var skillsField = document.getElementById("skills");
    var generateResume = function (event) {
        event.preventDefault();
        resumeContainer.innerHTML = '';
        var resumeHTML = "\n            <h2 contenteditable=\"true\">".concat(nameField.value, "</h2>\n            <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(emailField.value, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phoneField.value, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(educationField.value, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experienceField.value, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skillsField.value, "</p>\n        ");
        resumeContainer.innerHTML = resumeHTML;
    };
    resumeForm.addEventListener("submit", generateResume);
})();
