// 
// function cirlce() {
//     window.addEventListener("mousemove", function (dets) {
//         this.document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;


//     })
// }
// cirlce();



var a_link = document.querySelectorAll("#a-link");
// Handle mouse over/out event on links
a_link.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
a_link.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
window.addEventListener('mousemove', handleMouseMove);
// Move the cursor in dom/window
function handleMouseMove(event) {
  var cursor_top = event.pageY - (cursor.clientHeight / 2);
  var cursor_left = event.pageX - (cursor.clientWidth / 2);
  var circle_top = event.pageY - (circle.clientHeight / 2);
  var circle_left = event.pageX - (circle.clientWidth / 2);
  cursor.style.top = cursor_top + 2 + 'px';
  cursor.style.left = cursor_left + 2 + 'px';
  circle.style.top = circle_top + 'px';
  circle.style.left = circle_left + 'px';
}
// event: mouse enter on link
function handleMouseEnter() {
  cursor.classList.add('hovered');
  circle.classList.add('hovered');
}
// event: mouse leave on link
function handleMouseLeave() {
  cursor.classList.remove('hovered');
  circle.classList.remove('hovered');
}


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

