// THE RIGHT AND LEFT //////////////////////////////////////////////////////////
// AFRAME.registerComponent("particle-system", {
//   init: function () {
//     this.particles = [];
//     for (let i = 0; i < 1000; i++) {
//       let particle = document.createElement("a-sphere");
//       particle.setAttribute("radius", 0.05);
//       particle.setAttribute("position", {
//         x: (Math.random() - 0.5) * 10,
//         y: (Math.random() - 0.5) * 10,
//         z: (Math.random() - 0.5) * 10,
//       });
//       this.el.sceneEl.appendChild(particle);
//       this.particles.push(particle);
//     }
//   },
//   tick: function () {
//     for (let particle of this.particles) {
//       let position = particle.getAttribute("position");
//       position.x += 0.05; // Move particle horizontally along the x-axis
//       if (position.x > 10) {
//         // Reset particle to the other side
//         position.x = -10;
//       }
//       particle.setAttribute("position", position);
//     }
//   },
// });

// THE UP AND DOWN//////////////////////////////////////////////////////////
//   tick: function () {
//     for (let particle of this.particles) {
//       let position = particle.getAttribute("position");
//       position.y += 0.05; // Move particle upwards
//       if (position.y > 10) {
//         // Reset particle to the bottom
//         position.y = -10;
//       }
//       particle.setAttribute("position", position);
//     }
//   },
// });
// THE UP AND DOWN//////////////////////////////////////////////////////////

// AFRAME.registerComponent("particle-system", {
//   init: function () {
//     this.particles = [];
//     this.center = { x: 0, y: 0, z: 0 }; // Central point of the system
//     for (let i = 0; i < 1000; i++) {
//       let particle = document.createElement("a-sphere");
//       particle.setAttribute("radius", 0.05);
//       let position = {
//         x: (Math.random() - 0.5) * 2,
//         y: (Math.random() - 0.5) * 2,
//         z: (Math.random() - 0.5) * 2,
//       };
//       particle.setAttribute("position", position);
//       this.el.sceneEl.appendChild(particle);
//       this.particles.push({ element: particle, position: position });
//     }
//   },
//   tick: function () {
//     for (let particleObj of this.particles) {
//       let particle = particleObj.element;
//       let position = particleObj.position;

//       // Calculate the direction vector from the center to the particle
//       let direction = {
//         x: position.x - this.center.x,
//         y: position.y - this.center.y,
//         z: position.z - this.center.z,
//       };

//       // Normalize the direction
//       let magnitude = Math.sqrt(
//         direction.x ** 2 + direction.y ** 2 + direction.z ** 2
//       );
//       direction.x /= magnitude;
//       direction.y /= magnitude;
//       direction.z /= magnitude;

//       // Move the particle along the direction vector
//       position.x += direction.x * 0.05;
//       position.y += direction.y * 0.05;
//       position.z += direction.z * 0.05;

//       // Update the particle's position
//       particle.setAttribute("position", position);
//     }
//   },
// });

AFRAME.registerComponent("particle-system", {
  init: function () {
    this.particles = [];
    this.center = { x: 0, y: 0, z: 0 }; // Central point of the system
    for (let i = 0; i < 700; i++) {
      let particle = document.createElement("a-sphere");
      particle.setAttribute("radius", 0.05);
      let position = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        z: (Math.random() - 0.5) * 2,
      };
      particle.setAttribute("position", position);
      this.el.sceneEl.appendChild(particle);
      this.particles.push({
        element: particle,
        position: position,
        movingOutward: true,
      });
    }
  },
  tick: function () {
    for (let particleObj of this.particles) {
      let particle = particleObj.element;
      let position = particleObj.position;

      // Calculate the direction vector from the center to the particle
      let direction = {
        x: position.x - this.center.x,
        y: position.y - this.center.y,
        z: position.z - this.center.z,
      };

      // Normalize the direction
      let magnitude = Math.sqrt(
        direction.x ** 2 + direction.y ** 2 + direction.z ** 2
      );
      direction.x /= magnitude;
      direction.y /= magnitude;
      direction.z /= magnitude;

      // Reverse direction if the particle is moving inward
      if (!particleObj.movingOutward) {
        direction.x = -direction.x;
        direction.y = -direction.y;
        direction.z = -direction.z;
      }

      // Move the particle along the direction vector
      position.x += direction.x * 0.02;
      position.y += direction.y * 0.02;
      position.z += direction.z * 0.02;

      // Update the particle's position
      particle.setAttribute("position", position);

      // Check if the particle has reached a certain threshold, then reverse its direction
      if (magnitude >= 5 && particleObj.movingOutward) {
        particleObj.movingOutward = false;
      } else if (magnitude <= 2 && !particleObj.movingOutward) {
        particleObj.movingOutward = true;
      }
    }
  },
});
