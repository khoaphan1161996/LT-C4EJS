const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';

let searchEl = document.getElementById("search")
let btnEl = document.getElementById("btn")
let contentEl = document.getElementById("content")

async function getWeatherbyLocation(location="ho chi minh"){
    const res = await fetch(`${API_URL}/weather?q=${location}&appid=${API_KEY}`)
    const data = await res.json()
    console.log(`data:`,data)
    contentEl.insertAdjacentHTML('beforeend',createWeather(data))
}

getWeatherbyLocation()

function createWeather(weather){
    let temp = FtoC(weather.main.temp)
    return `
        <div>
            <h1>${weather.weather[0].main}</h1>
            <h3>${weather.main.name}</h3>
            <h2><img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/>${temp}C</h2>
        </div>
        `
}

function FtoC(K){
    return Math.floor(K-273.15)
}