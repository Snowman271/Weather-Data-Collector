var inputEl = document.querySelector(".searchInput");
var currCity = document.querySelector(".currCity");
var tempEl = document.querySelector(".temp");
var windEl = document.querySelector(".wind");
var humEl = document.querySelector(".hum");
var iconEl = document.querySelector(".icon");
var day1 = document.querySelector(".day1");
var icon1 = document.querySelector(".icon1");
var day1Temp = document.querySelector(".day1Temp");
var day1Wind = document.querySelector(".day1Wind");
var day1Hum = document.querySelector(".day1Hum");
var day2 = document.querySelector(".day2");
var icon2 = document.querySelector(".icon2");
var day2Temp = document.querySelector(".day2Temp");
var day2Wind = document.querySelector(".day2Wind");
var day2Hum = document.querySelector(".day2Hum");
var day3 = document.querySelector(".day3");
var icon3 = document.querySelector(".icon3");
var day3Temp = document.querySelector(".day3Temp");
var day3Wind = document.querySelector(".day3Wind");
var day3Hum = document.querySelector(".day3Hum");
var day4 = document.querySelector(".day4");
var icon4 = document.querySelector(".icon4");
var day4Temp = document.querySelector(".day4Temp");
var day4Wind = document.querySelector(".day4Wind");
var day4Hum = document.querySelector(".day4Hum");
var day5 = document.querySelector(".day5");
var icon5 = document.querySelector(".icon5");
var day5Temp = document.querySelector(".day5Temp");
var day5Wind = document.querySelector(".day5Wind");
var day5Hum = document.querySelector(".day5Hum");

var atlantaEl = document.querySelector(".atlanta");
var denverEl = document.querySelector(".denver");
var seattleEl = document.querySelector(".seattle");
var atlantaEl = document.querySelector("atlanta");
var orlandoEl = document.querySelector(".orlando");
var newYorkEl = document.querySelector(".newYork");
var chicagoEl = document.querySelector(".chicago");

document.querySelector("button").addEventListener("click", function () {
    var input = $(".searchInput").val();
    searchCity(input);
    searchCity5Day(input);
});

function searchCity(input) {
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=7ddf229751781b7f4cbed1adfe8e2b25";
fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
 currCity.innerHTML = data.name + "  ";
 iconEl.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png";
 humEl.innerHTML = "Humidity: " + data.main.humidity + " %";
 windEl.innerHTML = "Wind: " + data.wind.speed + " MPH";
 tempEl.innerHTML = "Wind: " + data.main.temp + " ºF";
 
});
}

function searchCity5Day(input) {
  var requestUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&appid=7ddf229751781b7f4cbed1adfe8e2b25";
  fetch(requestUrl2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    currCity.append("(" + data.list[0].dt_txt.slice(0, 10) + ")");
    console.log(data);

    //displays info for 5 day forcast
    day1.innerHTML = "(" + data.list[0].dt_txt.slice(0, 10) + ")";
    icon1.src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +"@2x.png";
    day1Hum.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";
    day1Wind.innerHTML = "Wind: " + data.list[0].wind.speed + " MPH";
    day1Temp.innerHTML = "Wind: " + data.list[0].main.temp + " ºF";

    day2.innerHTML = "(" + data.list[8].dt_txt.slice(0, 10) + ")";
    icon2.src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +"@2x.png";
    day2Hum.innerHTML = "Humidity: " + data.list[8].main.humidity + " %";
    day2Wind.innerHTML = "Wind: " + data.list[8].wind.speed + " MPH";
    day2Temp.innerHTML = "Wind: " + data.list[8].main.temp + " ºF";

    day3.innerHTML = "(" + data.list[16].dt_txt.slice(0, 10) + ")";
    icon3.src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +"@2x.png";
    day3Hum.innerHTML = "Humidity: " + data.list[16].main.humidity + " %";
    day3Wind.innerHTML = "Wind: " + data.list[16].wind.speed + " MPH";
    day3Temp.innerHTML = "Wind: " + data.list[16].main.temp + " ºF";

    day4.innerHTML = "(" + data.list[24].dt_txt.slice(0, 10) + ")";
    icon4.src = "http://openweathermap.org/img/wn/" + data.list[21].weather[0].icon +"@2x.png";
    day4Hum.innerHTML = "Humidity: " + data.list[24].main.humidity + " %";
    day4Wind.innerHTML = "Wind: " + data.list[24].wind.speed + " MPH";
    day4Temp.innerHTML = "Wind: " + data.list[24].main.temp + " ºF";

    day5.innerHTML = "(" + data.list[32].dt_txt.slice(0, 10) + ")";
    icon5.src = "http://openweathermap.org/img/wn/" + data.list[32].weather[0].icon +"@2x.png";
    day5Hum.innerHTML = "Humidity: " + data.list[32].main.humidity + " %";
    day5Wind.innerHTML = "Wind: " + data.list[32].wind.speed + " MPH";
    day5Temp.innerHTML = "Wind: " + data.list[32].main.temp + " ºF";
    // currCity.append(data.list[0]);
  });
  } 

  document.querySelector(".atlanta").addEventListener("click", function () {
  console.log(this.innerHTML);
  searchCity(this.innerHTML);
  searchCity5Day(this.innerHTML);
});

document.querySelector(".denver").addEventListener("click", function () {
  console.log(this.innerHTML);
  searchCity(this.innerHTML);
  searchCity5Day(this.innerHTML);
});

document.querySelector(".seattle").addEventListener("click", function () {
  console.log(this.innerHTML);
  searchCity(this.innerHTML);
  searchCity5Day(this.innerHTML);
});

document.querySelector(".san").addEventListener("click", function () {
  console.log(this.innerHTML);
  searchCity(this.innerHTML);
  searchCity5Day(this.innerHTML);
});

document.querySelector(".orlando").addEventListener("click", function () {
  console.log(this.innerHTML);
  searchCity(this.innerHTML);
  searchCity5Day(this.innerHTML);
});

document.querySelector(".newYork").addEventListener("click", function () {
  console.log(this.innerHTML);
  searchCity(this.innerHTML);
  searchCity5Day(this.innerHTML);
});

document.querySelector(".chicago").addEventListener("click", function () {
  console.log(this.innerHTML);
  searchCity(this.innerHTML);
  searchCity5Day(this.innerHTML);
});


