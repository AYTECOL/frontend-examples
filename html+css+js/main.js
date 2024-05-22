// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const heading = document.getElementById('heading');
    const button = document.getElementById('changeColorButton');

    // Function to change the color of the heading
    function changeColor() {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heading.style.color = randomColor;
    }

    // Add event listener to the button
    button.addEventListener('click', changeColor);
});
