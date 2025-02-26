
    const hamburguesaBtn = document.querySelector('.hamburguesa');
    const hamburguesaIcon = document.querySelector('.hamburguesa i');
    const menuPeque = document.querySelector('.menu_peque');

    hamburguesaBtn.onclick =function(){
        menuPeque.classList.toggle('open');
        const isOpen = menuPeque.classList.contains('open');
        hamburguesaIcon.classList = isOpen 
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

           
    };
