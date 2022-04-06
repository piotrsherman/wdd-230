const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');
const exitbutton = document.querySelector('#xbutton');
const ham = document.querySelector('#ham');

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    exitbutton.classList.toggle('hidden');
    ham.classList.toggle('hidden');
}, );




// const lastmodify = "Last modified:";

// let oLastModif = new Date(document.lastModified);

// const text = `${ lastmodify} ${oLastModif }`;

// document.getElementById("updatetime").innerHTML = text;    