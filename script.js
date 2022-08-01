let weather = {
    "apiKey": "7452db77ecd89c00efc86960f4f3833b",
    FetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid=" 
             + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name; 
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".temp").innerText = temp + "°С";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = "Speed of wind: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.FetchWeather(document.querySelector(".search-input").value);
    }
};

document.querySelector(".input button").addEventListener("click", function () {
      weather.search();
});

document.querySelector(".search-input").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
