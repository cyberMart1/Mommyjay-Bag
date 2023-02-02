const bar = document.getElementById('bar')
const cancle = document.getElementsByClassName('cancle')
const nav = document.getElementById('navbar')

if(bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active')
    })
}
if(cancle) {
    cancle.addEventListener('click', ()=> {
        nav.classList.remove('active')
    })
}