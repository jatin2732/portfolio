function cirlce() {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;


    })
}
cirlce();





