window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    if(this.window.scrollY > 50){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
});