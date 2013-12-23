var pixelWidth = 5
var pixelHeight = 9
var pixelMask = createMask();
var pixelPositions = createPositions();
var pixelMaxNum = calcPixels();

function pos(posx,posy) {
  return {x:posx, y:posy}
}

function createPositions () {
  var all = [];
  for (var j = 0; j < pixelMask.length; ++j) {
    var arr = [];
    for (var i = 0; i < pixelWidth * pixelHeight; ++i) {
      if (pixelMask[j][i] != ' ') {
        arr.push(pos(i % pixelWidth, ~~(i / pixelWidth)));
      }
    }
    all.push(arr);
  }
  return all;
}

function calcPixels () {
  var count = 0;
  for (var i = 10; i <= 14; ++i) {
    for (c in pixelMask[i]) {
      if (pixelMask[i][c] != ' ') {
        count++;
      }
    }
  }
  return count;
}

function createMask() {
  return [" *** " +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          " *** " ,

          "  *  " +
          " **  " +
          "  *  " +
          "  *  " +
          "  *  " +
          "  *  " +
          "  *  " +
          "  *  " +
          " *** " ,

          " *** " +
          "*   *" +
          "*   *" +
          "   * " +
          "  *  " +
          " *   " +
          "*    " +
          "*    " +
          "*****" ,

          " *** " +
          "*   *" +
          "*   *" +
          "    *" +
          "  ** " +
          "    *" +
          "    *" +
          "8   *" +
          " *** ",

          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          "*****" +
          "    *" +
          "    *" +
          "    *" +
          "    *" ,
          
          "*****" +
          "*    " +
          "*    " +
          "*    " +
          "**** " +
          "    *" +
          "    *" +
          "*   *" +
          " *** " ,

          "   * " +
          "  *  " +
          " *   " +
          "*    " +
          "**** " +
          "*   *" +
          "*   *" +
          "*   *" +
          " *** " ,

          "*****" +
          "*   *" +
          "    *" +
          "   * " +
          "   * " +
          "  *  " +
          "  *  " +
          " *   " +
          " *   " ,

          " *** " +
          "*   *" +
          "*   *" +
          "*   *" +
          " *** " +
          "*   *" +
          "*   *" +
          "*   *" +
          " *** " ,

          " *** " +
          "*   *" +
          "*   *" +
          "*   *" +
          " ****" +
          "    *" +
          "    *" +
          "    *" +
          " *** " ,

          "***  " +
          "*  * " +
          "*  * " +
          "*  * " +
          "***  " +
          "*  * " +
          "*   *" +
          "*   *" +
          "**** " ,

          "*****" +
          "  *  " +
          "  *  " +
          "  *  " +
          "  *  " +
          "  *  " +
          "  *  " +
          "  *  " +
          "*****" ,

          "*   *" +
          "**  *" +
          "**  *" +
          "* * *" +
          "* * *" +
          "* * *" +
          "*  **" +
          "*   *" +
          "*   *" ,

          " *** " +
          "*   *" +
          "*    " +
          "*    " +
          "* ***" +
          "*   *" +
          "*   *" +
          "*   *" +
          " *** " ,

          " *** " +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          "*   *" +
          " *** " ,

          "     " +
          "     " +
          "     " +
          "     " +
          " *** " +
          "     " +
          "     " +
          "     " +
          "     " ];
}
