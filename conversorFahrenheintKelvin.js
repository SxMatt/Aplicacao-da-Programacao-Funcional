var fahrenheit = [250, 300, 257, 280, 430, 500];

var kelvin = fahrenheit.map(function(elem){
    return Math.round(((elem - 273.15) * (9/5) + 32));
  }
 );

 console.log(kelvin);