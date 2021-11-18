let blur = 0;
let saturate = 100;
let contrast = 100;
let brightness = 100;
 

const imgture = document.getElementById("img");
const resetAll = document.getElementById("resetAll");

const slider1 = document.getElementById("slider1");
const value1 = document.getElementById("blur");

const slider2 = document.getElementById("slider2");
const value2 = document.getElementById("saturate");

const slider3 = document.getElementById("slider3");
const value3 = document.getElementById("contrast");

const slider4 = document.getElementById("slider4");
const value4 = document.getElementById("brightness");
 

// update filters
function updateFilters() {
 imgture.style.filter =
 "blur(" +
 blur +
 "px) saturate(" +
 saturate +
 "%) contrast(" +
 contrast +
 "%) brightness(" +
 brightness +
 "%)";
}

  
// blur slider
slider1.addEventListener("input", function() {
    value1.innerHTML = slider1.value + "px";
    blur = slider1.value;
    updateFilters();
   });
    
  // slider1.addEventListener("focus", function() {
  //  value1.style.visibility = "visible";
  // });
    
   slider1.addEventListener("blur", function() {
    value1.style.visibility = "hidden";
   });


// saturation slider
slider2.addEventListener("input", function() {
    value2.innerHTML = slider2.value + "%";
    saturate = slider2.value;
    updateFilters();
   });
    
   slider2.addEventListener("blur", function() {
    value2.style.visibility = "hidden";
   });


// contrast slider
slider3.addEventListener("input", function() {
    value3.innerHTML = slider3.value + "%";
    contrast = slider3.value;
    updateFilters();
   });
    
   slider3.addEventListener("blur", function() {
    value3.style.visibility = "hidden";
   });


// brightness slider
slider4.addEventListener("input", function() {
    value4.innerHTML = slider4.value + "%";
    brightness = slider4.value;
    updateFilters();
   });
    
   slider4.addEventListener("blur", function() {
    value4.style.visibility = "hidden";
   });


// screenshot button

const styleAndDownload = () => {
    const img = document.querySelector('#mentalImage img')
    screenshot(img).download()
}

document.querySelector('#download')
    .addEventListener('click', styleAndDownload)