document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return; 

    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    const cardWidth = cards[0].getBoundingClientRect().width;
    const cardMargin = 20; 
    const moveAmount = cardWidth + cardMargin;

    let currentIndex = 0;
    const maxIndex = cards.length - 1; 
    const updateButtons = () => {
        prevButton.disabled = currentIndex === 0;
        const containerWidth = track.parentElement.clientWidth;
        const trackWidth = track.scrollWidth;
        const currentPosition = currentIndex * moveAmount;
        
        nextButton.disabled = currentPosition >= (trackWidth - containerWidth);
    };

    nextButton.addEventListener('click', () => {
        if (!nextButton.disabled) {
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (!prevButton.disabled) {
            currentIndex--;
            track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
            updateButtons();
        }
    });

    updateButtons();

    window.addEventListener('resize', updateButtons);
});