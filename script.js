const learnBtn = document.querySelector('.b2');
const audio = document.getElementById('guitarSound');

learnBtn.addEventListener('click', () => {
    audio.currentTime = 0; 
    audio.play().catch(error => {
        console.log("Error playing audio: ", error);
    });
    console.log("Rock on, Tigran! 🎸");
});