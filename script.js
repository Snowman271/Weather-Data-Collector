var inputEl = document.querySelector(".searchInput");


document.querySelector("button").addEventListener("click", function () {
    var input = $(".searchInput").val();
    searchCity(input);
});

function searchCity(input) {
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=7ddf229751781b7f4cbed1adfe8e2b25";
fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 7ddf229751781b7f4cbed1adfe8e2b25

