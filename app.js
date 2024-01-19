function getWeather(){
    const apikey = '646824f2b7b86caffec1d0b16ea77f79'
    const city = document.getElementById('city').value 

    if(!city){
        alert('Please enter a city')
        return;
    }

    const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`

    fetch(currentWeatherUrl)
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)  
        displayWeather(data)
    })
    .catch((error) => console.log(error))
  
    fetch(forecastUrl)
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)  
        displayHourlyForecast(data)
    })
    .catch((error) => console.log(error))

}































// Air Pollution

 fetch('http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=646824f2b7b86caffec1d0b16ea77f79')
  .then((response) => {
      return response.json()
  }).then((data) => {
      console.log(data)  
  })
  .catch((error) => console.log(error))


  

