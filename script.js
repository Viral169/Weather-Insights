let apikey = "a043748c85eac6c09e1643dabc1c973a";
let btn = document.querySelector(".search-btn");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let wind_speed = document.querySelector(".wind-speed");
let humidity = document.querySelector(".humidity");
let visibility = document.querySelector(".visibility");
let description_text = document.querySelector(".description-text");
let date = document.querySelector(".date");

async function auto_call_data() {
  let city = "gujarat";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
  let res = await fetch(api);
  let data = await res.json();
  updatedata(data);
}
async function getdata() {
  let city_input = document.querySelector(".city-input").value;
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city_input}&units=metric&appid=${apikey}`;
  let res = await fetch(api);
  let data = await res.json();
  if (city_input == "") {
    alert("Please enter a city name");
  } else {
    updatedata(data);
  }
}

function updatedata(value) {
  city.innerText = value.name;
  temp.innerText = `${Math.round(value.main.temp)}°`;
  wind_speed.innerText = `${value.wind.speed} KM/H`;
  humidity.innerText = `${value.main.humidity}%`;
  visibility.innerText = `${value.visibility / 1000} KM`;
  description_text.innerText = `: ${value.weather[0].description}`;
  const currentdate = new Date();
  date.innerText = currentdate.toDateString();
}

auto_call_data();
btn.addEventListener("click", getdata);


const arr = [1, 2, 3];
const result = arr.map(function(n) {
 return n + 1;
});
console.log(result);