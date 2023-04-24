// my API is api.openweathermap.org/data/2.5/weather?id=524901&appid=e693f7e6d53d2c2a268a75d18a56171d
const buttonEl = document.getElementById("searchButton")
const inputEl = document.getElementById("city-input")

function weatherInfo(){
    const newLoc = document.getElementById("city-input"); //my id from the input
    const cityName = inputEl.value; //my id from the searched place
    const key = `e693f7e6d53d2c2a268a75d18a56171d`;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
.then(response => response.json())
.then(data =>{
    console.log(data);
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"temp").innerHTML="Temperature:" + Number(data.list[i].main.temp -294.83)+"°F"; //searched Florida so taking out the values on that
    }
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"wind").innerHTML="Wind:" + Number(data.list[i].wind.speed -3.58)+"MPH";
    }
    for(i=0;i<5;i++){
        document.getElementById("day"+(i+1)+"humid").innerHTML="Humidity:" + Number(data.list[i].main.humidity -69)+"%";
    }
        for(i=0;i<5;i++){
            document.getElementById("img" +(i+1)).src = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png";

    }
})
}

const date = new Date();

const yearOfDate = date.getFullYear(); 
const monthOfDate = date.getMonth() + 1; 
const dayOfMonth = date.getDate(); 

const together = [dayOfMonth, monthOfDate, yearOfDate].join(' / ');
console.log(together); 

buttonEl.addEventListener("click",weatherInfo);
