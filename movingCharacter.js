const neil = {
  arrImgs: ["runninge0000.png", "runninge0001.png", "runninge0002.png", "runninge0003.png",
            "runninge0004.png", "runninge0005.png", "runninge0006.png", "runninge0007.png"],
  poseNumber: 0,
  elem: document.querySelector("#neil"),
  screenHeight: document.querySelector("#park").clientHeight,
  x: 100,
  y: 0,
  timerId: null,
  move: function () {
    if (this.y >= this.screenHeight - 150) {
      this.y = 0; // loop back to top
    } else {
      this.y += 5; // move SOUTH
    }

    this.elem.style.top = this.y + "px";
    this.elem.src = this.arrImgs[this.poseNumber];
    this.poseNumber = (this.poseNumber + 1) % this.arrImgs.length;
  }
};

const owen = {
  arrImgs: neil.arrImgs,
  poseNumber: 0,
  elem: document.querySelector("#owen"),
  screenHeight: document.querySelector("#park").clientHeight,
  x: 300,
  y: 400,
  timerId: null,
  move: function () {
    if (this.y <= 0) {
      this.y = this.screenHeight - 150; // loop back to bottom
    } else {
      this.y -= 5; // move NORTH
    }

    this.elem.style.top = this.y + "px";
    this.elem.src = this.arrImgs[this.poseNumber];
    this.poseNumber = (this.poseNumber + 1) % this.arrImgs.length;
  }
};

const characters = [neil, owen];
let globalTimer = null;

function startAnimation() {
  if (!globalTimer) {
    globalTimer = setInterval(() => {
      characters.forEach(c => c.move());
    }, 100);
  }
}

function stopAnimation() {
  clearInterval(globalTimer);
  globalTimer = null;
}
