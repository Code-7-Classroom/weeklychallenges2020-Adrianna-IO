var i = 0 // counter start
var images = [];
var time = 2000;


// image list
images[0] = 'IMAGES/slideimage1.jpg';
images[1] = 'IMAGES/slideimage2.jpg';
images[2] = 'IMAGES/slideimage3.png';
images[3] = 'IMAGES/slideimage4.jpg';
images[4] = 'IMAGES/slideimage5.jpg';
images[5] = 'IMAGES/slideimage6.jpg';
images[6] = 'IMAGES/slideimage7.jpg';

// to change images
 function changeImg() {
     document.getElementById('heroSlide').src = images[i];


 if (i < images.length - 1) {
     i++;
 } else {
     i = 0;
 }

 setTimeout("changeImg()", time);

 }

 window.onload = changeImg;
