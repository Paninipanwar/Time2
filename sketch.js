let customFont; // Variable to hold the custom font

function preload() {
  // Load the custom font
  customFont = loadFont('Retro Computer_DEMO.ttf');
}

function setup() {
  createCanvas(100, 50);
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // Set the background color to black
  fill(255); // Set text color to white

  textFont(customFont); // Set the custom font

  let now = new Date();
  now.setHours(now.getHours()); // Keep the same hours
  now.setMinutes(now.getMinutes()); // Keep the same minutes

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let timeString = nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2); // Format the time as HH:MM:SS

  text(timeString, width / 2, height / 2);
}
