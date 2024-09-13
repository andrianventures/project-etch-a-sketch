const container = document.getElementById('container');
const buttons = document.querySelectorAll('.button'); // Select all buttons
let currentGridSize = 16; // Default grid size

// Function to create grid based on size
function createGrid(size) {
    container.innerHTML = ''; // Clear any existing grid
    const squareSize = 80 / size; // Adjust size of each square using vmin for responsiveness

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Dynamically setting width and height using JS
        square.style.width = `${squareSize}vmin`;
        square.style.height = `${squareSize}vmin`;

        square.style.opacity = 0; // Initial opacity
        // Add event listeners for hover and click to increase opacity
        square.addEventListener('mouseover', () => {
            increaseOpacity(square);
        });

        square.addEventListener('click', () => {
            increaseOpacity(square);
        });


        // Add event listeners for hover and click
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor(); // Hover effect
        });

        square.addEventListener('click', () => {
            square.style.backgroundColor = getRandomColor(); // Click effect
        });

        container.appendChild(square); // Add square to container
    }
}

// Function to progressively darken the square
function increaseOpacity(square) {
    let currentOpacity = parseFloat(square.style.opacity);
    
    if (currentOpacity < 1) {
        square.style.opacity = currentOpacity + 0.2; // Increase opacity by 20%
    }
}

// Function to reset the grid with the current grid size
function resetGrid() {
    createGrid(currentGridSize); // Recreate the grid with the current size
}

// Function to handle grid size button clicks
function setGridSize(event) {
    buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
    event.target.classList.add('active'); // Add active class to the clicked button

    currentGridSize = parseInt(event.target.id); // Get the grid size from the button id

    createGrid(currentGridSize); // Create grid with the selected size
}

// Add click event listeners to size buttons
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (button.id !== 'reset') { // Check if the button is not 'reset'
            setGridSize(event); // Set grid size
        } else {
            resetGrid(); // Handle reset button
        }
    });
});

// Create initial grid
createGrid(currentGridSize);

// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


