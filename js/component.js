var btn = document.querySelector('.envio');
var thanksContainer = document.querySelector('.thankyou');
var main = document.querySelector('.main');


btn.addEventListener("click", function() {

    thanksContainer.style.display = 'block';
    main.style.display = 'none';
    
});

var nota = document.querySelectorAll('.btn-nota');

for(var i = 0; i < nota.length; i++)

    nota[i].addEventListener('click', function(n) {    
    document.getElementById("notaselecionada").innerHTML = this.textContent;
    n.stopPropagation();

});
