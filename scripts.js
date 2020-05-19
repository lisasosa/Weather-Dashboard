$(document).ready(function () {

  $("#search-button").click(function () {
    console.log('searched')
    addSearchToList()
    getWeatherData()
  })


});

function addSearchToList() {
  var city = $("#city").val()
  $("#citiesList").append("<li class='list-group-item'>" + city + "</li>")
}

function getWeatherData() {
  var city = $("#city").val();
  if (city.length > 0) {
    let currentWeatherData;
    let forecastData;
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=af44dc376863ca058191b00a4396d79b", function (data, status) {
        currentWeatherData = data;
      })
      .done(function () {
        console.log(currentWeatherData)
      })
      .fail(function () {
        alert("current weather error");
      })

    $.get("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=af44dc376863ca058191b00a4396d79b", function (data, status) {
        forecastData = data
      }).done(function () {
        console.log(forecastData)
        populateFiveDay(forecastData)
      })
      .fail(function () {
        alert("forecast error");
      })



  } else {
    console.log("Please enter a city before searching.")
  }
}

function populateFiveDay(forecastData) {
  var dayCounter = 1
  for (var i = 3; i < forecastData["list"].length; i += 8) {
    $("#dayTitle" + dayCounter).text(forecastData["list"][i]['dt_txt'].split(' ')[0])
    $("#dayTemp" + dayCounter).text('Temp: ' + (forecastData["list"][i]['main']['temp']).toFixed() + ' F')
    $("#dayHumidity" + dayCounter).text('Humidity: ' + forecastData["list"][i]['main']['humidity'] + ' %')
    dayCounter += 1
  }
}