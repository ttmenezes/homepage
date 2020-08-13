const request = new XMLHttpRequest();
request.open('GET', 'https://api.weather.gov/zones/hourly/NJZ015/forecast', true);

request.onload = function () {
    const resp = JSON.parse(this.response).properties;
    console.log(resp.periods);
    //current forecast data
    const { name, detailedForecast } = resp.periods[0];


    const nameEl = document.createElement("h2");
    nameEl.textContent = name;


    weatherBlock = document.getElementById("background").querySelector("#weather");
    weatherBlock.appendChild(nameEl);
    const list = document.createElement('ul');
    list.setAttribute('id', 'weatherList');
    weatherBlock.appendChild(list);
    let forecast;

    detailedForecast.split('.').forEach((element) => {
        element = element.trim();
        if (element.length > 0) {
            forecast = document.createElement("li");
            forecast.textContent = element;
            list.appendChild(forecast);
        }
    });
}

request.send();

window.addEventListener('keydown', function (e) {
    e.key == 'n' ? this.location.assign('task.html') : undefined;
});