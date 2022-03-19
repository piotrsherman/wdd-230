const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=f4b9995aabd085a514a96289382703db";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#temp').textContent = Math.round(jsObject.main.temp_max - 273.15);


        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#speed').textContent = jsObject.wind.speed;
        document.querySelector('figcaption').textContent = desc;


        const t = Math.round(jsObject.main.temp_max - 273.15);
        const s = jsObject.wind.speed;

        if (t <= 50 && s > 3) {
            const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
            document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
        } else {
            document.querySelector("#windchill").innerHTML = "N/A"
        }
    });