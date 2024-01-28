let particles = [];
const num = 1000;
let stepSize = 4; // Adjust this value to change the speed
let flowDirection = 0; // Adjust this value to change the flow direction

const noiseScale = 0.01 / 2;

function preload() {
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(100, 100, 100);
  for (let i = 0; i < num; i++) {
    particles.push(
      createVector(random(width), random(height), random(-700, 700))
    );
  }
  setVRBackgroundColor(100, 100, 100);
}

function draw() {
  translate(width / 2, height / 2, -700);
  drawFlowField();
}

function drawFlowField() {
  stroke(random(200, 255), random(0, 20), random(20, 50));
  background(0, 10);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y, p.z);
    let n = noise(p.x * noiseScale, p.y * noiseScale, p.z * noiseScale);
    let a = TAU * n + flowDirection;
    p.x += cos(a) * stepSize;
    p.y += sin(a) * stepSize;
    p.z +=
      (noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale) -
        0.5) *
      stepSize *
      2;
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
      p.z = random(-700, 700);
    }
  }
}

function onScreen(v) {
  return (
    v.x >= 0 &&
    v.x <= width &&
    v.y >= 0 &&
    v.y <= height &&
    v.z >= -700 &&
    v.z <= 700
  );
}
