let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/3.JPG") {
    myImage.setAttribute("src", "images/4.JPG");
  } else {
    myImage.setAttribute("src", "images/3.JPG");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'WELCOME, ' + myName;
  }
}

if(!localStorage.getItem('Zhiyi')) {
  setUserName();
} else {a
  let storedName = localStorage.getItem('Zhiyi');
  myHeading.innerHTML = 'My name is ' + storedName;
}

document.getElementById('showImageButton').addEventListener('click', function() {
    var image = document.getElementById('hiddenImage');
    if (image.style.display === 'none') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });