const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

const contentEl = document.getElementById("content")
const searchEl = document.getElementById("search")
const btnEl = document.getElementById("btn")

async function getWeatherByLocation(location="ho chi minh"){
    const  res = await fetch(`${API_URL}/weather?q=${location}&appid=${API_KEY}`)
    const data = await res.json()
    console.log("data", data)
    createWeather(data)
}

function createWeather(weather){
    // console.log("weather",weather)
    let temp = FtoC (weather.main.temp)
    let innerWeather = `
        <div>
            <h1>${weather.weather[0].main}</h1>
            <h3>${weather.name}</h3>
            <h2><img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/>${temp}C</h2>
        </div>
        `
    contentEl.insertAdjacentHTML('beforeend',innerWeather)
}

function FtoC(K){
    return Math.floor(K-273.15)
}


btnEl.addEventListener('click' , ()=> {
    let location = searchEl.value
    contentEl.innerHTML = ""
    getWeatherByLocation(location)
})
getWeatherByLocation()

