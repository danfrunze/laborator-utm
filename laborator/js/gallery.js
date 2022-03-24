const slides = document.querySelectorAll('.rectangle-country')

for (const slide of slides){
    slide.addEventListener('mouseover', () => {
        clearActiveSlides();
        slide.classList.add('active');
    })
}

function clearActiveSlides(){
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}