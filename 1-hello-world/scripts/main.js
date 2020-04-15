// elements
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// functions
function setUserName() {
    let myName = prompt('Please enter your name.');
    if( !myName|| myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

// events
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/firefox-icon.png') {
        myImage.src = 'images/firefox2.png';
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
};

myButton.onclick = function() {
    setUserName();
};

// initial
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
