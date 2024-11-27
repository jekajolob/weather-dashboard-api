document
  .getElementById('weather-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault()

    const city = document.getElementById('city-input').value
    const API_KEY = '' // put your API KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error('City not found')
      }
      const data = await response.json()

      // Update the UI
      document.getElementById('city-name').textContent = data.name
      document.getElementById('description').textContent =
        data.weather[0].description
      document.getElementById('temperature').textContent = data.main.temp
      document.getElementById('humidity').textContent = data.main.humidity
      document.getElementById('wind-speed').textContent = data.wind.speed
      document.getElementById('weather-result').classList.remove('hidden')
    } catch (error) {
      alert(error.message)
    }
  })
