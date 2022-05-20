const close = document.querySelector('.close-menu');
const open = document.querySelector('.open-menu');
const menu = document.querySelector('.humburger-menu')

open.addEventListener('click', ()=>{
    menu.classList.remove('hide')
    menu.classList.add('show')
})
close.addEventListener('click', ()=>{
    menu.classList.remove('show')
    menu.classList.add('hide')
 

})

