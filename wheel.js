// function zoom(event) {
//   event.preventDefault();
//
//   scale += event.deltaY * -0.01;
//
//   // Restrict scale
//   scale = Math.min(Math.max(.125, scale), 4);
//
//   // Apply scale transform
//   el.style.transform = `scale(${scale})`;
// }
//
// let scale = 1;
// const el = document.querySelector('.pointer');
// el.onwheel = zoom;

//
// function myFunction(event) {
//   var y = event.deltaY;
//   document.getElementById("pointer").innerHTML = y;
// }

function myFunction(event) {
  var y = event.deltaY;
  var currentSize = event.target.style.width;
  if (y > 0) {
    newSize = parseInt(currentSize) + 10;
  } else {
    newSize = parseInt(currentSize) - 10;
  }
  event.target.style.width = newSize + "px";
  event.target.style.height = newSize + "px";
}
