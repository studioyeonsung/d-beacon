function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(0.5, scale), 5);
  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('#particle-nav');
el.onwheel = zoom;
