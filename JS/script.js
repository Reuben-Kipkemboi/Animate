window.addEventListener('DOMContentLoaded', function(e){
    document.querySelector('hp-presentation').onclick=handlePresentationClick;
})

function handlePresentationClick(e){
    // alert("I have been clicked");
    var currentSlide =document.querySelector('hp-slider.active');
    var nextSlide = currentSlide.nextElementSibling;

    if(next){
        currentSlide.classList.remove('active');
        next.classList.add('active');
    }
}