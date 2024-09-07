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

// Immediately Invoked Function Expression (IIFE) to create a local scope
(() => {
    // Selecting necessary DOM elements
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;

    // Form fields
    const nameField = document.getElementById("name") as HTMLInputElement;
    const emailField = document.getElementById("email") as HTMLInputElement;
    const phoneField = document.getElementById("phone") as HTMLInputElement;
    const educationField = document.getElementById("education") as HTMLTextAreaElement;
    const experienceField = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsField = document.getElementById("skills") as HTMLTextAreaElement;

    // Function to handle form submission and dynamically generate resume
    const generateResume = (event: Event): void => {
        event.preventDefault();

        // Clear any existing content
        resumeContainer.innerHTML = '';

        // Create resume HTML
        const resumeHTML = `
            <h2>${nameField.value}</h2>
            <p><strong>Email:</strong> ${emailField.value}</p>
            <p><strong>Phone:</strong> ${phoneField.value}</p>
            <h3>Education</h3>
            <p>${educationField.value}</p>
            <h3>Experience</h3>
            <p>${experienceField.value}</p>
            <h3>Skills</h3>
            <p>${skillsField.value}</p>
        `;

        // Insert the generated resume into the container
        resumeContainer.innerHTML = resumeHTML;
    };

    // Adding event listener to the form submission
    resumeForm.addEventListener("submit", generateResume);
})();
