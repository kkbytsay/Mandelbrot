const canvas = document.getElementById("canvas");
let currentDot;
const startPoint = {
  x: Math.floor(Math.random() * 1900),
  y: Math.floor(Math.random() * 1000),
};

const dotA = {
  x: 850,
  y: 10,
};

const dotB = {
  x: 10,
  y: 950,
};

const dotC = {
  x: 1890,
  y: 950,
};

function CheckNextApex() {
  if (Math.floor(Math.random() * 3) == 1) {
    return dotA;
  } else if (Math.floor(Math.random() * 3) == 2) {
    return dotB;
  } else {
    return dotC;
  }
}

function FindNextDot(apex, prevDot) {
  dotX = (apex.x + prevDot.x) / 2;
  dotY = (apex.y + prevDot.y) / 2;
  return { x: dotX, y: dotY };
}

// Check browser support
if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#c71f1f";

  //draw apexs of triangle
  ctx.fillRect(dotA.x, dotA.y, 1, 1);
  ctx.fillRect(dotB.x, dotB.y, 1, 1);
  ctx.fillRect(dotC.x, dotC.y, 1, 1);

  //draw first dot
  ctx.fillRect(startPoint.x, startPoint.y, 1, 1);

  for (let index = 0; index < 100000; index++) {
    setTimeout(() => {
      index == 0 ? (currentDot = startPoint) : null;
      let NextApex = CheckNextApex();
      currentDot = FindNextDot(NextApex, currentDot);

      ctx.fillRect(currentDot.x, currentDot.y, 1, 1);
    }, 1);
  }
} else {
  document.querySelector(".container").textContent =
    "Sorry your browser doesn't support my app";
}
