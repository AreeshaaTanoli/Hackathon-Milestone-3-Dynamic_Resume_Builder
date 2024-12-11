// Select form and output containers
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Add event listener for form submission
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Fetch input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var summary = document.getElementById('summary').value;
        // Handle dynamic fields
        var education = Array.from(document.getElementsByName('education')).map(function (input) { return input.value; });
        var experience = Array.from(document.getElementsByName('experience')).map(function (input) { return input.value; });
        var skills = Array.from(document.getElementsByName('skills')).map(function (input) { return input.value; });
        // Check if profile photo exists and display it
        var photoInput = document.getElementById('photo');
        var photoHTML = '';
        if (photoInput.files && photoInput.files[0]) {
            var photoURL = URL.createObjectURL(photoInput.files[0]);
            photoHTML = "<img src=\"".concat(photoURL, "\" alt=\"Profile Photo\" class=\"profile-photo\">");
        }
        // Generate the resume HTML
        var resumeHTML = "\n            <h2>Generated Resume</h2>\n            ".concat(photoHTML, "\n            <p><strong>Name:</strong> ").concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Summary:</strong> ").concat(summary, "</p>\n            <h3>Education</h3>\n            <ul>").concat(education.map(function (ed) { return "<li>".concat(ed, "</li>"); }).join(''), "</ul>\n            <h3>Work Experience</h3>\n            <ul>").concat(experience.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "</ul>\n            <h3>Skills</h3>\n            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n        ");
        // Display the resume
        resumeOutput.innerHTML = resumeHTML;
    });
}
// Function to add a new input field dynamically
function addField(sectionId, placeholder) {
    var section = document.getElementById(sectionId);
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = sectionId.slice(0, -8);
    newInput.placeholder = placeholder;
    newInput.className = 'form-group';
    section.appendChild(newInput);
}
// Function to preview the resume dynamically
function livePreview() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // Update live preview content
    var previewContainer = document.getElementById('resumeOutput');
    previewContainer.innerHTML = "\n        <h2>Live Preview</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n    ");
}
// Attach input event listeners for live preview
['name', 'email', 'phone'].forEach(function (id) {
    var inputField = document.getElementById(id);
    if (inputField) {
        inputField.addEventListener('input', livePreview);
    }
});
