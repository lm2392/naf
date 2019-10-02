AFRAME.registerComponent('forward', {
  schema: {
    speed: {default: 0.1},
  },

  init: function() {
  	var worldDirection = new THREE.Vector3();

    this.el.object3D.worldDirection(worldDirection);
    worldDirection.multiplyScalar(-1);

    this.worldDirection = worldDirection;
    console.error(this.worldDirection);
  },

  tick: function() {
  	var el = this.el;

  	var currentPosition = el.getAttribute('position');
	  var newPosition = this.worldDirection
							        .clone()
							        .multiplyScalar(this.data.speed)
							        .add(currentPosition);
	  el.setAttribute('position', newPosition);
  }
});

AFRAME.registerComponent("foo", {
  init: function() {
    var player = document.querySelector("#player")
    window.addEventListener("keydown", (e) => {
      if (e.code === "KeyR") {
         var angle = player.getAttribute("rotation")
         var x = 1 * Math.cos(angle.y * Math.PI / 180)
         var y = 1 * Math.sin(angle.y * Math.PI / 180)
         var pos = player.getAttribute("position")
         pos.x -= y;
         pos.z -= x;
         player.setAttribute("position", pos);
       }
     })
   }
  })