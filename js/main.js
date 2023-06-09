let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');

        let height = 0;
        
        let menu = listElement.nextElementSibling;

        if(menu.clientHeight==0){
            height=menu.scrollHeight;
        }

        menu.style.height = height+"px";
    })

    
});

const btntogle = document.querySelector('.togle-btn');

btntogle.addEventListener('click', function(){
    document.getElementById('nav').classList.toggle('nav__side_move');
})

const contenidotogle = document.querySelector('.togle-btn');

btntogle.addEventListener('click', function(){
    document.getElementById('contenido').classList.toggle('contenido-display');
})




