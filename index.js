let apikey = "44fc4151fe192d6be03c32f18ac70c53";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        alert("Invalid City Name");
    }
    else{
        let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/hr";

   
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    console.log("New icon set to:", weatherIcon.src);

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    CheckWeather(searchBox.value);
});

