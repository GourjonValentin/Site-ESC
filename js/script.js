const sound = new Audio('../sound/scream.mp3');

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.falling-image');
    
    // Get the total height of the document
    const pageHeight = document.documentElement.scrollHeight + 600;

    images.forEach(image => {
        const randomLeft = Math.random() * 80; // Random position between 0 and 80%
        const randomDuration = 5 + Math.random() * 5; // Random duration between 5s and 10s
        const randomDelay = Math.random() * 5; // Random delay between 0s and 5s

        image.style.left = `${randomLeft}%`;
        image.style.animationDuration = `${randomDuration}s`;
        image.style.animationDelay = `${randomDelay}s`;

        // Create a new keyframes rule for each image to account for the page height
        const fallKeyframes = `
            @keyframes fall-${image.dataset.index} {
                0% {
                    top: -150px;
                    transform: translateX(0) rotate(0deg);
                    opacity: 0.1;
                }
                10% {
                    opacity: 0.3;
                }
                25% {
                    transform: translateX(40px) rotate(15deg);
                }
                50% {
                    transform: translateX(-40px) rotate(-15deg);
                }
                75% {
                    transform: translateX(30px) rotate(10deg);
                }
                100% {
                    top: ${pageHeight}px; /* Fall to the bottom of the page */
                    transform: translateX(0) rotate(360deg);
                    opacity: 0.2;
                }
            }
        `;

        // Append the new keyframes rule to the document's stylesheet
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(fallKeyframes, styleSheet.cssRules.length);

        // Assign the new animation to the image
        image.style.animationName = `fall-${image.dataset.index}`;
    });
});


window.addEventListener("click", function() {
    const start = Math.random() * sound.duration;
    sound.currentTime = start;
    sound.play();
    setTimeout(() => {
        sound.pause();
    }, 3000);
});

