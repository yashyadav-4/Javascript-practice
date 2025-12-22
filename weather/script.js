const APIkey="908aaa82e4e1dcb0eb56208912995455";
const APIurl="https://api.openweathermap.org/data/2.5/weather?&units=metric"; 

// this if u want to show gurgaon when load
// async function initalWeather(){
//     await checkWeather("gurgaon")
// }
// initalWeather()


async function checkWeather(city) {
    const response =await fetch(APIurl + `&appid=${APIkey}&q=${city}`);
    var data=await response.json();
    console.log(data); 
    const weatherIcon=document.querySelector(".weather-icon");
    if(data.cod=="404"){
        document.querySelector(".city").innerHTML="City not found";
        document.querySelector(".wind").innerHTML="-";
        document.querySelector(".humidity").innerHTML="-";
        document.querySelector(".temp").innerHTML="-";
        document.querySelector(".weather").style.display="block"
        return;
    }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".wind").innerHTML=data.wind.speed + "m/s";
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/Rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/Drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/Mist.png";
    }
    document.querySelector(".weather").style.display="block"
}


function search(){
    const city=document.getElementById("input").value;
    checkWeather(city);
}

// for searching on enter
document.getElementById("input").addEventListener("keydown" , function(e){
    if(e.key=="Enter") search()
});

