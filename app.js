const body = document.body;
const hintHex = document.querySelector(".hint__hex");
const hintRgb = document.querySelector(".hint__rgb");

/*
 * Generate a random number between the given interval
 */
function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/*
 * Create a pulse animation on the client click coordinates
 */
function pulse(posX, posY) {
  const spans = [];
  for (let i = 0; i <= 3; i++) {
    spans.push(document.createElement("span"));
  }

  spans.forEach((span, idx) => {
    span.style.top = `${posY}px`;
    span.style.left = `${posX}px`;
    span.classList.add("wave");
    span.style.animation = `pulse 1s ${idx * 0.2}s forwards`;

    body.appendChild(span);
  });

  setTimeout(() => {
    spans.forEach((span) => span.remove());
  }, 1500);
}

/*
 * Update the background color with a random color
 */
function update() {
  const intv = [0, 255];
  const dec = [rand(...intv), rand(...intv), rand(...intv)];
  const hex = dec.map((num) => num.toString(16));

  hintHex.textContent = `#${hex.join("")}`;
  hintRgb.textContent = `rgb(${dec.join()})`;

  body.style.backgroundColor = `rgb(${dec.join()})`;
}
update();

window.addEventListener("click", (e) => {
  update();
  pulse(e.clientX, e.clientY);
});
