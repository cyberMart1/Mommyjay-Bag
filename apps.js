//nav bar part
const bar = document.getElementById('bar')
const close = document.querySelector('.close')
const nav = document.getElementById('navbar')

if(bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    });
}

if(close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    });
}

//login page
const userEl = document.getElementById('username')
const passEl = document.getElementById('password')


function signIn(){
    if(userEl.value === "admin" && passEl.value === "admin") {
        location.replace("index.html");
        alert("logged in");
        console.log('works');
    }else {
        alert("Wrong Username or Password");
    }
}

// move from product img to product details

function moveToDetails() {
    location.replace('bagdetails.html')
}

function moveToDetails2() {
    location.replace('bagdetails2.html')
}