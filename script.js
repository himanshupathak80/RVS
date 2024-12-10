document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`You clicked on the ${section.id} section`);
        });
    });
});
