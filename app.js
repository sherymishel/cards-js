const slides = document.querySelectorAll('.slide');

 for (const slide of slides) {
     slide.addEventListener('click', () => {
        clearActiveClasses()

         slide.classList.add('active');
         console.log(slide);
     })
 }
function clearActiveClasses() {
    for (slide of slides) {
        slide.classList.remove('active');
    }
}

/*for (let i = 0; i < slides.length; i++) {
   
    slides[i].addEventListener('click', () => {
        slides[i].classList.add('active');
    })
}*/
/*function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classsList.remove('active')
    })
    for (let k = 0; k < slides.length; k++) {
    if (slides[k].classList === 'active') {
        slides[k].classsList.remove('active')
    }
}*/