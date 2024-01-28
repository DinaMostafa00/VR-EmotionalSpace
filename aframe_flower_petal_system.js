AFRAME.registerComponent("flower-petal-system", {
  init: function () {
    // Initialization similar to your p5.js setup function
    this.petals = [];
    let pet = Math.round(Math.random() * (25 - 8) + 8); // 8 to 25
    let lay = Math.random() * (30 - 4) + 4; // 4 to 30
    let ang = 360 / pet;
    let rMax = 5; // Adjust this based on your scene scale
    let hueyD = 1.4; // Rate of color change

    // Declare your variables
    let x1D, x2D, y2D, x3D, y3D, x4D;
    let x1, x2, y2, x3, y3, x4, huey;
    let sat, brt, alph, currR, maxY2, maxY3;

    for (let j = lay; j > 0; j--) {
      currR = (j / lay) * rMax;
      // currR = (j / lay) * (width / 2);
      x1 = random(0.35 * currR, 0.45 * currR);
      x2 = random(0.5 * currR, 0.7 * currR);
      maxY2 = x2 * tan(ang) * 0.9;
      y2 = random(0.06 * currR, maxY2);
      x3 = random(x2 * 1.1, 0.85 * currR);
      maxY3 = x3 * tan(ang) * 0.9;
      y3 = random(0.06 * currR, maxY3);
      x4 = random(0.88 * currR, 0.99 * currR);
      x1D = x2D = y2D = x3D = y3D = x4D = (rate / lay) * j;
      huey = random(360);
      array1.push(
        x1,
        x2,
        y2,
        x3,
        y3,
        x4,
        x1D,
        x2D,
        y2D,
        x3D,
        y3D,
        x4D,
        huey,
        hueyD
      );

      // Create petals as entities
      for (let i = 0; i < pet; i++) {
        let petal = document.createElement("a-entity");
        // Set petal properties (like shape, color, position)
        // You need to translate curveVertex logic to A-Frame entities
        this.el.sceneEl.appendChild(petal);
        this.petals.push(petal);
      }
    }
  },
  tick: function () {
    // Animation logic similar to your p5.js draw function
    for (let petal of this.petals) {
      // Update petal properties (like position, color)
      // Remember to translate p5.js logic to modify A-Frame entities
    }
  },
  // Add methods for handling key inputs (p, n, s)
});
