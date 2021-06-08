
function resize(){    
    $("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
  }
  $(document).ready(function(){
    resize();
    $(window).on("resize", function(){                      
        resize();
    });
  });

var canvas = document.getElementById("projectArea");
var ctx = canvas.getContext("2d");


//function drawGrid(c, r, sc, sr){
    ctx.moveTo(300,300);
    ctx.lineTo(200,100);
    ctx.stroke();
//};