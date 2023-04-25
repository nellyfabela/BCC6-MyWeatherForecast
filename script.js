// my API is api.openweathermap.org/data/2.5/weather?id=524901&appid=e693f7e6d53d2c2a268a75d18a56171d
const buttonEl = document.getElementById("searchButton")
const inputEl = document.getElementById("city-input")

const date = new Date();

const yearOfDate = date.getFullYear();
const monthOfDate = date.getMonth() + 1;
const dayOfMonth = date.getDate();

const together = "  on today's forecast " + [dayOfMonth, monthOfDate, yearOfDate].join('/');
console.log(together);

function weatherInfo() {
    const newLoc = document.getElementById("city-input"); //my id from the input
    const cityName = inputEl.value; //my id from the searched place
    const key = `e693f7e6d53d2c2a268a75d18a56171d`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("location").textContent = data.name+together;
            document.getElementById("temp").textContent = "Temperature: " + data.main.temp + "°F";
            document.getElementById("wind").textContent = "Wind: " + data.wind.speed + " mph";
            document.getElementById("humid").textContent = "Humidity: " + data.main.humidity + " %";
            document.getElementById("icon").src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon+".png";

            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${key}`)
                .then(response => response.json())
                .then(data => {
                    for(i=0;i<5;i++){
                        document.getElementById("day"+(i+1)+"temp").innerHTML="Temperature: " + data.list[i].main.temp+" °F"; 
                    }
                    for(i=0;i<5;i++){
                        document.getElementById("day"+(i+1)+"wind").innerHTML="Wind: " + data.list[i].wind.speed+"MPH";
                    }
                    for(i=0;i<5;i++){
                        document.getElementById("day"+(i+1)+"humid").innerHTML="Humidity: " +data.list[i].main.humidity+"%";
                    }
                        for(i=0;i<5;i++){
                            document.getElementById("img" +(i+1)).src = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png";
                    
                    }
                        for(i=1;i<6;i++){
                            var date=[dayOfMonth+i, monthOfDate, yearOfDate].join('/')
                            document.getElementById("day" +(i)).textContent=date;
                    }
                })
        })
}



buttonEl.addEventListener("click", weatherInfo);
