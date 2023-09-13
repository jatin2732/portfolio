function cirlce() {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;


    })
}
cirlce();




    function SetNew() {
        document.getElementById('photo').src = './img/project 1.png'
    }

    function SetOld() {
        document.getElementById('photo').src = './img/web_project.jpg'
    }
    function SetNew2() {
        document.getElementById('photo').src = './img/project 2.png'
    }

    function SetNew3() {
        document.getElementById('photo').src = './img/project 3.png'
    }

    
    function SetNew4() {
        document.getElementById('photo').src = './img/project 4.png'
    }

   
