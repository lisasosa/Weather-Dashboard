
  $(document).ready(function(){

	});

function getWeatherData() {
  var city = $("#city").val();
  if(city.length > 0) {
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=af44dc376863ca058191b00a4396d79b", function(data, status){
      console.log(data)
      console.log(status)
      consolole.log("Data: " + data + "\nStatus: " + status);
    });
  }
  else {
   console.log("Please enter a city before searching.")
  }
}

