const API_KEY = "bfaa613564b6762cbea175fd750e8735";
const images = [
  "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg",
];

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

      document.querySelector("#city").innerText = data.name;
      document.querySelector("#weather").src = icon;
      document.querySelector("#temperature").innerText = `${data.main.temp}`;

      document.querySelector("#description").innerText =
        data.weather[0].description;
      document.querySelector("#windSpeed").innerText = data.wind.speed;
      document.querySelector("#windDeg").innerText = data.wind.deg;

      document.querySelector(
        "#weatherCard"
      ).style.backgroundImage = `url('${icon}')`;

      document.querySelector("#lodding").classList.add("hide");

      var obj = document.getElementById("backGround");
      var size = Math.floor(Math.random() * images.length);
      j = isNaN(size) ? 0 : size;

      document.body.style.backgroundImage = "url(" + images[size] + ")";
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const member = document.querySelector("#member");


function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hide");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintMember(username);
}

function paintMember(username) {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  member.innerText = `${username}`;
  document.querySelector("#memberView").classList.remove("hide");
  document.querySelector("#loginView").classList.add("hide");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hide");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintMember(savedUsername);
}



