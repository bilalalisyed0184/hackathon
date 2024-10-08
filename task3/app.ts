// Immediately Invoked Function Expression (IIFE) to create a local scope for toggling skills section
(() => {
    const toggleSkillsBtn: HTMLElement = document.getElementById("toggleSkillsBtn")!;
    const skillsSection: HTMLElement = document.getElementById("skillsSection")!;
    let isSkillsVisible: boolean = true;

    const toggleSkillsSection = (): void => {
        if (isSkillsVisible) {
            skillsSection.style.display = "none";
            toggleSkillsBtn.textContent = "Show Skills Section";
        } else {
            skillsSection.style.display = "block";
            toggleSkillsBtn.textContent = "Hide Skills Section";
        }
        isSkillsVisible = !isSkillsVisible;
    };

    toggleSkillsBtn.addEventListener("click", toggleSkillsSection);
})();

// Immediately Invoked Function Expression (IIFE) to create a local scope for generating and editing resume
(() => {
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeContainer = document.getElementById("resumeContainer") as HTMLElement;

    const nameField = document.getElementById("name") as HTMLInputElement;
    const emailField = document.getElementById("email") as HTMLInputElement;
    const phoneField = document.getElementById("phone") as HTMLInputElement;
    const educationField = document.getElementById("education") as HTMLTextAreaElement;
    const experienceField = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsField = document.getElementById("skills") as HTMLTextAreaElement;

    const generateResume = (event: Event): void => {
        event.preventDefault();

        resumeContainer.innerHTML = '';

        const resumeHTML = `
            <h2 contenteditable="true">${nameField.value}</h2>
            <p><strong>Email:</strong> <span contenteditable="true">${emailField.value}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true">${phoneField.value}</span></p>
            <h3>Education</h3>
            <p contenteditable="true">${educationField.value}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experienceField.value}</p>
            <h3>Skills</h3>
            <p contenteditable="true">${skillsField.value}</p>
        `;

        resumeContainer.innerHTML = resumeHTML;
    };

    resumeForm.addEventListener("submit", generateResume);
})();
