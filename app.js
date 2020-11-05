let i = 0;
let images = [];
let time = 3000;

// image list here

images[0] = 'images/img-1 (1).jpg';
images[1] =  'images/img-3.png';
images[2] = 'images/img-4.jpg';
// images[3] = '/images/img-2.jpg';

// change image

function changeImg(){
  document.slide.src = images[i];
  if(i < images.length - 1 )
  {
    i++;
  }
  else 
  {
    i = 0;
  }
  setTimeout("changeImg()", time);
  
}
window.onload = changeImg;
function darkT(){
  let element = document.body;
  element.classList.toggle("dark");
}