// ////////CITATIONS////////
// // Mandala art video link : https://www.youtube.com/watch?v=k28xNx-Q3ys
// // MP3 track website : https://pixabay.com/sound-effects/search/mp3/

// let player;
// let mandalaSize = 0.5;
// let type = 1; //1 for complex see-through, 2 for solid
// let rate = 3; //rate of pedal change 0.5
// let hueyD = 1.4; //rate of color change 1.4
// let fr = 24; //framerate 24
// let chance = 0.1; //chance in 10 of reversal 0.1
// let array1 = [];
// let newArray = [];
// let paused = false;

// let x1D, x2D, y2D, x3D, y3D, x4D;
// let x1,
//   x2,
//   y2,
//   x3,
//   y3,
//   x4,
//   huey,
//   sat,
//   brt,
//   alph,
//   ang,
//   currR,
//   maxY2,
//   maxY3,
//   ped,
//   lay;

// function preload() {
//   createVRCanvas();
// }

// function setup() {
//   frameRate(fr);
//   setVRBackgroundColor(100, 100, 100);
//   //   createCanvas(innerWidth, innerHeight);
//   angleMode(DEGREES);
//   colorMode(HSB, 360, 100, 100, 100);

//   sat = 100;
//   if (type == 1) {
//     brt = 100;
//     alph = 35;
//     noStroke(0);
//   } else {
//     brt = 70;
//     alph = 100;
//     stroke(0);
//   }

//   newArt();
// }

// function newArt() {
//   array1 = [];
//   ped = round(random(8, 25)); // 8 to 25
//   lay = random(4, 30); //4, 40+ takes more processing
//   ang = 360 / ped;

//   // calculate STARTING hues and points for each layer, starting with outside pedals and going inward, and save them plus directions to array
//   for (let j = lay; j > 0; j--) {
//     currR = (j / lay) * (width / 2);
//     x1 = random(0.35 * currR, 0.45 * currR);
//     x2 = random(0.5 * currR, 0.7 * currR);
//     maxY2 = x2 * tan(ang) * 0.9;
//     y2 = random(0.06 * currR, maxY2);
//     x3 = random(x2 * 1.1, 0.85 * currR);
//     maxY3 = x3 * tan(ang) * 0.9;
//     y3 = random(0.06 * currR, maxY3);
//     x4 = random(0.88 * currR, 0.99 * currR);
//     x1D = x2D = y2D = x3D = y3D = x4D = (rate / lay) * j;
//     huey = random(360);
//     array1.push(
//       x1,
//       x2,
//       y2,
//       x3,
//       y3,
//       x4,
//       x1D,
//       x2D,
//       y2D,
//       x3D,
//       y3D,
//       x4D,
//       huey,
//       hueyD
//     );
//   }
//   if (paused) {
//     draw();
//   }
// }

// function drawMandala(handSize) {
//   newArray = [];
//   push();
//   translate(500, 500);

//   // rotateX(frameCount * 0.01);
//   // rotateY(frameCount * 0.01);

//   // calculate points for each layer, starting with outside pedals and going inward
//   for (let k = lay; k > 0; k--) {
//     let place = (lay - k) * 14;
//     let x1N = array1[place + 0];
//     let x2N = array1[place + 1];
//     let y2N = array1[place + 2];
//     let x3N = array1[place + 3];
//     let y3N = array1[place + 4];
//     let x4N = array1[place + 5];
//     let x1Nd = array1[place + 6];
//     let x2Nd = array1[place + 7];
//     let y2Nd = array1[place + 8];
//     let x3Nd = array1[place + 9];
//     let y3Nd = array1[place + 10];
//     let x4Nd = array1[place + 11];
//     let hueyN = array1[place + 12];
//     let hueyNd = array1[place + 13];
//     currR = (k / lay) * (width / 2);

//     x1N += x1Nd;
//     if (x1N < 0.35 * currR || x1N > 0.45 * currR || random(10) < chance) {
//       x1Nd *= -1;
//     }
//     x2N += x2Nd;
//     if (x2N < 0.5 * currR || x2N > 0.7 * currR || random(10) < chance) {
//       x2Nd *= -1;
//     }
//     maxY2 = x2N * tan(ang) * 0.9;
//     y2N += y2Nd;
//     if (y2N < 0.06 * currR || y2N > maxY2 || random(10) < chance) {
//       y2Nd *= -1;
//     }
//     x3N += x3Nd;
//     if (x3N < x2N * 1.1 || x3N > 0.85 * currR || random(10) < chance) {
//       x3Nd *= -1;
//     }
//     maxY3 = x3N * tan(ang) * 0.9;
//     y3N += y3Nd;
//     if (y3N < 0.06 * currR || y3N > maxY3 || random(10) < chance) {
//       y3Nd *= -1;
//     }
//     x4N += x4Nd;
//     if (x4N < 0.88 * currR || x4N > 0.99 * currR || random(10) < chance) {
//       x4Nd *= -1;
//     }
//     hueyN += hueyNd;
//     if (hueyN > 359) {
//       hueyN = 0;
//     }
//     if (hueyN < 0) {
//       hueyN = 359;
//     }
//     if (random(10) < chance) {
//       hueyNd *= -1;
//     }
//     fill(hueyN, sat, brt, alph);
//     newArray.push(
//       x1N,
//       x2N,
//       y2N,
//       x3N,
//       y3N,
//       x4N,
//       x1Nd,
//       x2Nd,
//       y2Nd,
//       x3Nd,
//       y3Nd,
//       x4Nd,
//       hueyN,
//       hueyNd
//     );
//     // draw the pedals for one layer
//     for (let i = 0; i < ped; i++) {
//       beginShape();
//       curveVertex(x4N * handSize, 0);
//       curveVertex(x4N * handSize, 0);
//       curveVertex(x3N * handSize, y3N * handSize);
//       curveVertex(x2N * handSize, y2N * handSize);
//       curveVertex(x1N * handSize, 0);
//       curveVertex(x2N * handSize, -y2N * handSize);
//       curveVertex(x3N * handSize, -y3N * handSize);
//       curveVertex(x4N * handSize, 0);
//       curveVertex(x4N * handSize, 0);
//       endShape();
//       rotate(ang);
//     }
//     rotate(ang / 2);
//   }
//   pop();
//   array1 = newArray;
// }

// function draw() {
//   translate(0, 0, -700);
//   updateMandalaSize();
//   drawMandala(mandalaSize);
// }

// let minMandalaSize = 0.1;
// let maxMandalaSize = 1.0;
// let mandalaSizeIncrement = 0.01;
// let increasing = true;

// function updateMandalaSize() {
//   if (increasing) {
//     mandalaSize += mandalaSizeIncrement;
//     if (mandalaSize >= maxMandalaSize) {
//       increasing = false;
//     }
//   } else {
//     mandalaSize -= mandalaSizeIncrement;
//     if (mandalaSize <= minMandalaSize) {
//       increasing = true;
//     }
//   }
// }

// let particles = [];
// const num = 1000;
// let stepSize = 4; // Adjust this value to change the speed
// let flowDirection = 0; // Adjust this value to change the flow direction

// const noiseScale = 0.01 / 2;

// function preload() {
//   createVRCanvas();
// }

// function setup() {
//   setVRBackgroundColor(100, 100, 100);
//   for (let i = 0; i < num; i++) {
//     particles.push(
//       createVector(random(width), random(height), random(-700, 700))
//     );
//   }
//   setVRBackgroundColor(100, 100, 100);
// }

// function draw() {
//   translate(width / 2, height / 2, -700);
//   drawFlowField();
// }

// function drawFlowField() {
//   stroke(random(200, 255), random(0, 20), random(20, 50));
//   background(0, 10);
//   for (let i = 0; i < num; i++) {
//     let p = particles[i];
//     point(p.x, p.y, p.z);
//     let n = noise(p.x * noiseScale, p.y * noiseScale, p.z * noiseScale);
//     let a = TAU * n + flowDirection;
//     p.x += cos(a) * stepSize;
//     p.y += sin(a) * stepSize;
//     p.z +=
//       (noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale) -
//         0.5) *
//       stepSize *
//       2;
//     if (!onScreen(p)) {
//       p.x = random(width);
//       p.y = random(height);
//       p.z = random(-700, 700);
//     }
//   }
// }

// function onScreen(v) {
//   return (
//     v.x >= 0 &&
//     v.x <= width &&
//     v.y >= 0 &&
//     v.y <= height &&
//     v.z >= -700 &&
//     v.z <= 700
//   );
// }

////
AFRAME.registerComponent("particle-system", {
  init: function () {
    this.particles = [];
    for (let i = 0; i < 1000; i++) {
      let particle = document.createElement("a-sphere");
      particle.setAttribute("radius", 0.05);
      particle.setAttribute("position", {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
      });
      this.el.sceneEl.appendChild(particle);
      this.particles.push(particle);
    }
  },
  tick: function () {
    for (let particle of this.particles) {
      let position = particle.getAttribute("position");
      position.y += 0.05; // Move particle upwards
      if (position.y > 10) {
        // Reset particle to the bottom
        position.y = -10;
      }
      particle.setAttribute("position", position);
    }
  },
});

////
// document.addEventListener("DOMContentLoaded", () => {
//   const mandala = document.getElementById("mandala");

//   const numRings = 5;
//   const numElementsPerRing = 12;
//   const ringRadiusIncrement = 0.5;

//   for (let ring = 0; ring < numRings; ring++) {
//     const ringRadius = ring * ringRadiusIncrement;
//     for (let i = 0; i < numElementsPerRing; i++) {
//       let theta = (i / numElementsPerRing) * Math.PI * 2;
//       let x = ringRadius * Math.cos(theta);
//       let y = ringRadius * Math.sin(theta);

//       let element = document.createElement("a-box");
//       element.setAttribute("position", { x: x, y: y, z: 0 });
//       element.setAttribute("rotation", {
//         x: 0,
//         y: 0,
//         z: theta * (180 / Math.PI),
//       });
//       element.setAttribute("color", "#FFC65D");
//       element.setAttribute("depth", 0.1);
//       element.setAttribute("height", 0.1);
//       element.setAttribute("width", 0.1);

//       mandala.appendChild(element);
//     }
//   }
// });