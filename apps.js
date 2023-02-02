//nav bar part
const bar = document.getElementById('bar')
const close = document.querySelector('.close')
const nav = document.getElementById('navbar')

if(bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active')
    });
}

if(close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active')
    });
}

//login part
const userEl = document.getElementById('username')
const passEl = document.getElementById('password')
const btnlogin = document.getElementById('btnlogin')


function login(){
    if(userEl.value === "admin" && passEl.value === "admin") {
        location.replace("index.html");
        console.log('works')
    }else {
        alert("Wrong Username or Password")
    }
}
