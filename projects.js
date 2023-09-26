var a_link = document.querySelectorAll('#a-link');
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

   
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
          document.querySelector("body").classList.add("loaded");
      }, 1000)
    });