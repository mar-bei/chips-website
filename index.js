let list = document.querySelector('.right-contents');
let list_2 = document.querySelector('.list-2')
var list_link_1 = document.querySelectorAll('.list li a');
let list_link_2 = document.querySelectorAll('.right-contents-2 .list-2 li a');
let home = document.querySelector('.right-contents-2 .list-2 li a:nth-child(1)');
let btn = document.querySelector('.btn');
let menu = document.querySelector('#menu');
let Close = document.querySelector('#close');
let header = document.querySelector('header');

console.log(innerWidth,innerHeight);
btn.onclick = () => {
    window.scrollTo(0,0);
}
home.onclick = () => {
    window.scrollTo(0,0);
}
window.onscroll = () => {
    if(scrollY > 70){
        header.style.boxShadow = '0px 0px 8px  #535353' ;
        btn.style.display = 'flex';
    }
    else{
        header.style.boxShadow = '0px 0px 0px  #535353' ;
        btn.style.display = 'none';


    }
}
list_link_1.forEach(e => {
    e.onclick = () => {
        let isActive = document.querySelector('.active');
        isActive ? isActive.classList.remove('active') : '';
        e.classList.add('active');
        list.style.display = 'none';
        if(innerWidth > 890)
        {
            Close.style.display = 'none';
            menu.style.display = 'none';
            list.style.display = 'flex';
        }
    else{
        Close.style.display = 'none';
        menu.style.display = 'flex';

    }
    }
})




menu.onclick = () => {
    list.style.display = 'flex';
    list.style.marginRight = '0';
    Close.style.display = 'flex';
    menu.style.display = 'none';

    
}

Close.onclick = () => {
    list.style.display = 'none';
    list.style.marginRight = '100em';
    list.style.transition = '.4s';
    Close.style.display = 'none';
    menu.style.display = 'flex';
}

