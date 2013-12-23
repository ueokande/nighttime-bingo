var length = 9;
var size= 48;
var boxes = {};
var digitWidth = 100;
var digitHeight = 180;
var digitSpace = 80;
var numSeq = createNumSeq();

function keyUpEvent(e) {
  switch (e.keyCode) {
  case 13:  // Enter
  case 40:  // Down
  case 32:  // Space
    next();
  }
}

function createNumSeq() {
  var o = new Array(75); 
  for (var i = 0; i < 75; ++i) {
    o[i] = i + 1;
  }
  shuffle(o);
  return o;
}

function shuffle(o) {
  var copy = o.slice(0);
  for (var i = 0; i < o.length; ++i) {
    var index = ~~(Math.random() * copy.length);
    o[i] = copy[index];
    copy.splice(index, 1);
  }
};

function init() {
  for (var i = 0; i < pixelMaxNum; ++i) {
    var id = "box" + i;
    var div = "<div class=\"box\" id=\"" + id + "\" />";
    document.getElementById("container").innerHTML += div;
    boxes[i] = document.getElementById(id);
    randomAnime(boxes[i]);
  }
  putStr("BINGO");
  document.onkeyup = keyUpEvent;
}

function randomAnime(ele) {
  ele.style.animationName = ele.style.webkitAnimationName = "pattern" + (~~(Math.random() * 4));
  ele.style.animationIterationCount = ele.style.webkitAnimationIterationCount = "infinite";
  ele.style.animationDuration = ele.style.webkitAnimationDuration = 1 + Math.random() + "s";
  ele.style.animationDelay = ele.style.webkitAnimationDelay = Math.random() + "s";
  ele.style.animationDirection = ele.style.webkitAnimationDirection = "alternate-reverse";
  ele.style.animationTimingFunction = ele.style.webkitAnimationTimingFunction = "ease-in-out";
}

function calcOffset(index, len) {
  var allWidth = len * digitWidth + (len - 1) * digitSpace;
  var zero = (winW() - allWidth) / 2;
  var left = index * digitWidth + index * digitSpace;
  return zero + left
}

function putStr(str) {
  var ledIndex = 0;
  var ledSeq = new Array(pixelMaxNum);
  for (var i = 0; i < pixelMaxNum; ++i) {
    ledSeq[i] = i;
  }
  shuffle(ledSeq);

  for (var i = 0; i < str.length; ++i) {
    var c = ord(str[i]);
    if (ord('0') <= c && c <= ord('9')) {
      index = c - ord('0');
    } else if (c == ord('B')) {
      index = 10;
    } else if (c == ord('I')) {
      index = 11;
    } else if (c == ord('N')) {
      index = 12;
    } else if (c == ord('G')) {
      index = 13;
    } else if (c == ord('O')) {
      index = 14;
    } else if (c == ord('-')) {
      index = 15;
    }
    var offset = calcOffset(i, str.length);
    for (var j in pixelPositions[index]) {
      var p = pixelPositions[index][j];
      var x = (p.x / pixelWidth) * digitWidth + offset
      var y = (p.y / pixelHeight) * digitHeight + 100;
      moveBox(ledSeq.pop(), x, y);
    }
  }
  while (ledSeq.length != 0) {
    moveBox(ledSeq.pop(), Math.random() * (winW() - 64) + 32, -20);
  }
}

function ord(c) {
  return c.charCodeAt(0);
}

function moveBox(index, x, y) {
    var id = "box" + index;
    var ele = document.getElementById(id);
    ele.style.left = x + "px";
    ele.style.top = y + "px";
}

function fillCell(num) {
  var row = ~~((num - 1)  / 15);
  var cell = (num - 1) % 15 + 1;
  document.getElementById("board").rows[row].cells[cell].
    style.backgroundColor = "rgba(0,0,255,0.6)";
}

function next() {
  if (numSeq.length == 0) {
    return;
  }
  var n = numSeq.pop();
  if (1 <= n && n <= 15) {
    c = "B";
  } else if (16 <= n && n <= 30) {
    c = "I";
  } else if (31 <= n && n <= 45) {
    c = "N";
  } else if (46 <= n && n <= 60) {
    c = "G";
  } else if (61 <= n && n <= 75) {
    c = "O";
  }
  putStr(c + "-" + n);
  fillCell(n);
}

function winW() {
  return window.innerWidth ||
         document.documentElement.clientWidth ||
         document.getElementsByTagName('body')[0].clientWidth;
}

function winH() {
  return window.innerHeight ||
         document.documentElement.clientHeight ||
         document.getElementsByTagName('body')[0].clientHeight;
}

