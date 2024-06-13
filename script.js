const apiKey = "bab3e1b035f5319c6403fe3e506adb9c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const input = document.getElementById("search-bar");
const btn = document.getElementById("btn");
const img = document.getElementById("img")

async function checkWeather(c){
    const  resp = await fetch(apiUrl + c + `&appid=${apiKey}`);
    var data = await resp.json();

    console.log(data)
    const temp =document.getElementById("temp");
    const city =document.getElementById("city");
    const humidity =document.getElementById("humidity");
    const wind =document.getElementById("wind");

    temp.innerHTML=Math.round(data.main.temp)+ "°C";
    city.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"% <br> Humidity";
    wind.innerHTML=data.wind.speed+"Km\h <br> Humidity";

    if (data.weather[0].main == "Clouds"){
        img.src = "clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        img.src ="clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        img.src ="rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        img.src ="drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        img.src ="mist.png";
    }

}


btn.addEventListener("click" , () => {
    if (input.value === '') {
        alert("Please enter the City name !");
    }

    checkWeather(input.value);
    input.value="";
});
