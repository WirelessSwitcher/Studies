const ratio = 4/3;

projectArea.onclick = function() {

    var sx = window.innerWidth;
    var sy = window.innerHeight;

    var maxX = 0.8 * sx;
    var maxY = 0.8 * sy;

    var x;
    var y;

    for(x = 0; x < maxX; x++) {
        y = x * (1/ratio);

       if (y > maxY){
           break;
       }
    }
}