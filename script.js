document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.open-button');
    const envelope = document.querySelector('.envelope');
    const backgroundMusic = document.getElementById('background-music');

    let isOpen = false;

    openButton.addEventListener('click', () => {
        if (!isOpen) {
            envelope.classList.add('open');
            openButton.textContent = 'Read Again ❤️'; // Change button text
            
            // Play music (optional, uncomment if you have an audio file)
            // backgroundMusic.play().catch(e => console.log("Audio play failed:", e));

            isOpen = true;
        } else {
            // Reset to closed state for "Read Again"
            envelope.classList.remove('open');
            openButton.textContent = 'Open My Heart 💌';
            
            // Pause and rewind music (optional)
            // backgroundMusic.pause();
            // backgroundMusic.currentTime = 0;

            isOpen = false;
        }
    });
});
