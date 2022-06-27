window.addEventListener('DOMContentLoaded', function(e){
    document.querySelector('hp-presentation').onclick=handlePresentationClick;
})

function handlePresentationClick(e){
    // alert("I have been clicked");
    var currentSlide =document.querySelector('hp-slider.active');
    var nextSlide = currentSlide.nextElementSibling;

    if(nextSlide){
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');


        var auto = parseInt(nextSlide.getAttribute('data-auto'));

        if(!isNaN(auto)){
            setTimeout(function(event){
                handlePresentationClick(event)
            }, auto);
        }
    }
}