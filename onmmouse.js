// $(document).on('mousemove', function(e) {
//   var xPos = e.pageX;
//   var yPos = e.pageY;
//   // console.log(xPos, yPos);
//   $('.pointer').css({
//     'top': yPos,
//     'left': xPos
//   });
// });

let circle = document.getElementById('pointer');const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}document.addEventListener('mousemove', onMouseMove);
