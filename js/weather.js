const API_KEY = "8cf4e829f6fb6202e1d4928eb40d0a2e";

function onGeoSuccess (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weatherIcon = document.createElement("img")
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            weatherIcon.src = iconUrl;
            const container = document.querySelector(".icon-container"); // 이미지를 추가할 컨테이너 요소 선택
            container.appendChild(weatherIcon);

            const weatherDescription = document.createElement("div")
            weatherDescription.innerText = `기온: ${data.main.temp}°C \n습도: ${data.main.humidity}%`;
            container.appendChild(weatherDescription);

            const location = document.querySelector("#location");
            location.innerText = `Logged in from ${data.sys.country}, ${data.name}`;
        });
}

function onGeoError () {
    alert("위치를 확인할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)