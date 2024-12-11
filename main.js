// List of section IDs in order
const sections = ['hero', 'intro', 'body1', 'body2'];
let currentSectionIndex = 0;

// Add event listener to the "Next" button
document.querySelector('.next-btn').addEventListener('click', function() {
    // Increment the section index
    currentSectionIndex = (currentSectionIndex + 1) % sections.length; // Loop back to the first section
    // Get the next section's ID
    const nextSectionId = sections[currentSectionIndex];
    // Scroll to the next section
    document.getElementById(nextSectionId).scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.back-btn').addEventListener('click', function () {
    // Decrement the section index
    currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length; // Loop back to the last section
    // Get the previous section's ID
    const previousSectionId = sections[currentSectionIndex];
    // Scroll to the previous section
    document.getElementById(previousSectionId).scrollIntoView({ behavior: 'smooth' });
});