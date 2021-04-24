// a list of external APIs to call.

export default {
  weather: (lat=0, lon=0) => ({
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: { lat, lon, units: "imperial",},
    headers: {
      'x-rapidapi-key': '432a406112msh815ae97a1aa5866p1a9a11jsn0d8b2297c741',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
  })
}
