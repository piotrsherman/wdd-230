fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=f4b9995aabd085a514a96289382703db")
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#temp').textContent = jsObject.main.temp;
    });



const iconsrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';

const desc = jsObject.weather[0].description;


document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;