// Text to be typed
const typingText = "Hi, I'm Olayiwola Abdullah (Olly) a web developer and problem solver. 😀😊😀";

// Element to display typed text
const typingElement = document.getElementById("typing-text");

// Cursor element
const cursorElement = document.getElementById("cursor");

// Typing speed (ms)
const typingSpeed = 100;

// Index of current character
let charIndex = 0;

// Function to type text
function typeText() {
  // Append next character to typed text
  typingElement.textContent += typingText[charIndex];

  // Move to next character
  charIndex++;

  // Stop typing if text is complete
  if (charIndex >= typingText.length) {
    clearInterval(typingInterval);
    cursorElement.style.animation = "none";
  }
}

// Start typing
const typingInterval = setInterval(typeText, typingSpeed);





// // Add event listener to menu items
// document.querySelectorAll('nav li').forEach((item) => {
//     item.addEventListener('click', () => {
//         // Add active class to clicked item
//         item.classList.add('active');
//         // Remove active class from other items
//         document.querySelectorAll('nav li').forEach((otherItem) => {
//             if (otherItem)
//        ; }


