function cirlce() {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;


    })
}
cirlce();


// const toggle = document.getElementById('toggleDark');
// const body = document.querySelector('body');
// const a = document.querySelectorAll('a'[0]);


// toggle.addEventListener('click', function () {
//     this.classList.toggle('bi-moon');
//     if (this.classList.toggle('bi-brightness-high-fill')) {

//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '2s';
//         a.style.color = 'white';
        

//     }
//     // else{
//     body.style.background = 'white'
//     body.style.color = 'black';
//     body.style.transition = '2s';
//     a.style.color = 'black'

    

//     // }
// });
let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function (){
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-times");
    }
    else{
        icon.classList.replace("fa-times", "fa-bars");
    }
}