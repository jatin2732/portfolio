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


function copyMyText() {

    var textToCopy = document.getElementById("copyMe");

    textToCopy.select();

    document.execCommand("copy");
}
var box = document.getElementById('copyMe').readOnly = true


const scriptURL = 'https://script.google.com/macros/s/AKfycbylx6AYLYs1oFMgKFmZxHTTQbZ82yZvlv4ZGcGhEIIcPGxehXZaW_guQXBI-u9ngRInyA/exec'
const form = document.forms['backend']

  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you!  your form is submitted successfully. " ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    })



    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(function() {
          document.querySelector("body").classList.add("loaded");
      }, 1000)
    });