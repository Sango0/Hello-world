var nav= document.querySelector('.navbar');

window.addEventListener('scroll', function (){
    if (window.pageYOffset > 50) {
        nav.classList.add('bg-dark', 'shadow');
    }

    else{
        nav.classList.remove('bg-dark', 'shadow');
    }
});