
let hours= document.getElementById("hrs")
let mins= document.getElementById("min")
let secs= document.getElementById("sec")
setInterval(()=>{
    let currentTime=new Date();
hours.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours()
mins.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes()
secs.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds()
},1000)



const apiKey = "6fd83db0fc4bf01f3bd3491fa4ca78a7 "

let apiURL=`https://api.openweathermap.org/data/2.5/weather?Units=metric&q=`

const search=document.querySelector(".sear input")
const searchBtn=document.querySelector(".sear button")
let image11=document.querySelector(".image1")
let cas=document.querySelector(".sun")
let back=document.querySelector("body")
async function getWhether(city){
    const response = await fetch(apiURL +city+ `&appid=${apiKey}`)
    const data= await response.json()
    console.log(data)
    document.querySelector(".city-name").innerHTML=data.name
    document.querySelector(".pe").innerHTML=data.main.humidity+"%"
    document.querySelector(".deg").innerHTML= Math.round(data.main.temp-273)+"℃"
    document.querySelector(".wi").innerHTML=data.wind.speed+"k/h"
    document.querySelector(".mit").innerHTML=Math.round(data.main.temp_min-273)+"℃"
    document.querySelector(".mat").innerHTML=Math.round(data.main.temp_max-273)+"℃"
    document.querySelector(".pre").innerHTML=data.main.pressure
    document.querySelector(".la").innerHTML=data.coord.lat
    document.querySelector(".lo").innerHTML=data.coord.lon
    document.querySelector(".coun").innerHTML=data.sys.country
    document.querySelector(".su").innerHTML=data.sys.sunrise
    document.querySelector(".sus").innerHTML=data.sys.sunset
    if(data.weather[0].main=="Clear"){
        image11.src="./pngwing.com (1).png"
    cas.innerHTML="Clear"


    }else if(data.weather[0].main=="Clouds"){
        image11.src="./cloudy.png"
        
        cas.innerHTML="Clouds"
    }
    else if(data.weather[0].main=="Rain"){
        image11.src="./rainy.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        image11.src="./cloudy.png"
    }
}


searchBtn.addEventListener("click",()=>{
    getWhether(search.value);
})



