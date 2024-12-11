// Select form and output containers
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement | null;

// Add event listener for form submission
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Fetch input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;

        // Handle dynamic fields
        const education = Array.from(document.getElementsByName('education')).map(input => (input as HTMLInputElement).value);
        const experience = Array.from(document.getElementsByName('experience')).map(input => (input as HTMLInputElement).value);
        const skills = Array.from(document.getElementsByName('skills')).map(input => (input as HTMLInputElement).value);

        // Check if profile photo exists and display it
        const photoInput = document.getElementById('photo') as HTMLInputElement;
        let photoHTML = '';
        if (photoInput.files && photoInput.files[0]) {
            const photoURL = URL.createObjectURL(photoInput.files[0]);
            photoHTML = `<img src="${photoURL}" alt="Profile Photo" class="profile-photo">`;
        }

        // Generate the resume HTML
        const resumeHTML = `
            <h2>Generated Resume</h2>
            ${photoHTML}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Summary:</strong> ${summary}</p>
            <h3>Education</h3>
            <ul>${education.map(ed => `<li>${ed}</li>`).join('')}</ul>
            <h3>Work Experience</h3>
            <ul>${experience.map(exp => `<li>${exp}</li>`).join('')}</ul>
            <h3>Skills</h3>
            <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        `;

        // Display the resume
        resumeOutput.innerHTML = resumeHTML;
    });
}

// Function to add a new input field dynamically
function addField(sectionId: string, placeholder: string) {
    const section = document.getElementById(sectionId) as HTMLElement;
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = sectionId.slice(0, -8);
    newInput.placeholder = placeholder;
    newInput.className = 'form-group';
    section.appendChild(newInput);
}

// Function to preview the resume dynamically
function livePreview() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    // Update live preview content
    const previewContainer = document.getElementById('resumeOutput')!;
    previewContainer.innerHTML = `
        <h2>Live Preview</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;
}

// Attach input event listeners for live preview
['name', 'email', 'phone'].forEach(id => {
    const inputField = document.getElementById(id) as HTMLInputElement | null;
    if (inputField) {
        inputField.addEventListener('input', livePreview);
    }
});
