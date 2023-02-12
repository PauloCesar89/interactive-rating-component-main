var btn = document.querySelector('.envio');
var thanksContainer = document.querySelector('.thankyou');
var main = document.querySelector('.main');


btn.addEventListener("click", function() {

    thanksContainer.style.display = 'block';
    main.style.display = 'none';
    
});