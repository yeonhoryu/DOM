function getWidth(id) {
  // Return the width of the element specified in the parameter "id"
  // let element = document.getElementById(id);
  // const width = element.offsetWidth;
  // // let width = window.getComputedStyle(element).width;
  // return width;

  // const width2  = element.wi
  // let width = window.getComputedStyle(element).width;
  //** */
  // Return the width of the element specified in the parameter "id"
  const element = document.getElementById(id);
  const width = element.offsetWidth;

  return width;
}

let width = getWidth('mainDiv');
console.log(width);
// No need to change below this point.
// Note how we're using DOM elements here to display the result of the getWidth() function inside the "areaWidth" element
window.onload = () => {
  document.getElementById('areaWidth').innerHTML = getWidth('mainDiv');


};

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { getWidth };
}