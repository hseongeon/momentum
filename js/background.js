const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const bgImageFileName = "url('img/" + images[Math.floor(Math.random() * images.length)] + "')";

document.body.style.backgroundSize = "cover";
document.body.style.backgroundImage = bgImageFileName;

/* original code by Nicolas
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
*/