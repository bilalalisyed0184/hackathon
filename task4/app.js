"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
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
(function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeContainer = document.getElementById("resumeContainer");
    var pdfButtonContainer = document.getElementById("pdfButtonContainer");
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
        // Create and append the PDF download button
        var downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download PDF';
        downloadButton.addEventListener('click', function () {
            var pdf = new jspdf_1.default();
            pdf.text(resumeContainer.innerText, 10, 10); // Simplified text extraction
            pdf.save('resume.pdf');
        });
        pdfButtonContainer.innerHTML = ''; // Clear previous button if any
        pdfButtonContainer.appendChild(downloadButton);
    };
    resumeForm.addEventListener("submit", generateResume);
})();
