// Example: Toggle the visibility of the "Experience" section
document.addEventListener('DOMContentLoaded', function () {
    const experienceSection = document.getElementById('experience');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle Experience";
    document.body.insertBefore(toggleButton, experienceSection);
    
    toggleButton.addEventListener('click', function () {
        experienceSection.style.display = experienceSection.style.display === 'none' ? 'block' : 'none';
    });
});
