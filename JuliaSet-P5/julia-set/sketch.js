var angle = 0;
function setup() {
  createCanvas(640,360);
  colorMode(HSB, 1);
}

function draw() {
  
  var ca = cos(angle*3.213); //sin(angle);
  var cb = sin(angle);
  
  angle += 0.02;
  
  background(255);
  
  //Establishing a range of values on the complex plane
  
  //var w = abs(sin(angle)) * 5;
  
  var w = 5;
  var h = (w * height) / width;
  
  var xmin = -w/2;
  var ymin = -h/2;
  
  loadPixels();
  
  var maxiterations = 100;
  
  var xmax = xmin + w;
  var ymax = ymin + w;
  
  var dx = (xmax - xmin) / (width);
  var dy = (ymax - ymin) / height;
  
  var y = ymin;
  for (var j = 0; j < height; j++) {
      var x = xmin;
      for (var i = 0; i < width; i++) {
          
          var a = x;
          var b = y;
          var n = 0;
          
          while (n < maxiterations) {
              var aa = a * a;
              var bb = b * b;
              
              //testing infinity
              if (aa + bb > 4.0) {
                  break;
              }
              var twoab = 2.0 * a * b;
              a = aa - bb + ca;
              b = twoab + cb;
              n++
          }
          
          if (n == maxiterations) {
              pixels[i+j*width] = color(0);
          } else {
              var hu = sqrt(float(n) / maxiterations);
              pixels[i+j*width] = color(hu, 255, 150); 
          }
          x += dx;
      }
      y += dy;
  }
  updatePixels();
  //console.log(framerate);
}