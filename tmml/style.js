// console.log("=== Hour 1: JSON Basics ===");

// let student={
//     name:"Asha",
//     age:21,
//     marks:[85,90,78]
// };

// //convert object-> JSON strig
// let jsonString =JSON.stringify(student);
// console.log("JSON String:",jsonString);

// //convert JSON string-> object
// let parsedObj =JSON.parse(jsonString);
// console.log("Parsed Object:", parsedObj);

// console.log("=== Hour 2: AJAX with Fetch ===");

// fetch("https://jsonplaceholder.typicode.com/post/1")
//    .then(response => response.json())
//    .then(data => console.log("Fetched data:", data))
//    .catch(error => console.error("Error:", error));

// fetch("https://jsonplaceholder.typicode.com/posts/")
//    .then(response => response.json())
//    .then(data => console.log("Fetched data:", data))
//    .catch(error => console.error("Error:", error));

//    fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//       let output = "<h3>User List</h3><ul>";
//       users.forEach(user => {
//          output += `<li>${user.name} - (${user.email})</li>`;
//       });
//       output += "</ul>";
//       document.body.innerHTML += output;
//    });

//    const cityCoords ={
//       "banglore":{lat: 12.97, lon: 77.59},
//       "delhi":{lat: 28.61, lon: 77.23},
//       "mumbai":{lat: 19.07, lon: 72.87},
//       "london":{lat: 51.51, lon: -0.13},
//       "newyork":{lat: 40.71, lon: -74.01}
//    };

//    document.getElementById("fetchBtn").addEventListener("click",()=>{
//       let city = document.getElementById("cityInput").value.toLowerCase();

//       if(!cityCoords[city]){
//          document.getElementById("weather").innerHTML ="⚠ city not in list!";
//          return;
//       }
//       let coords = cityCoords[city];
//       let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
// fetch(url)
//          .then(res => res.json())
//          .then(data => {
//             if(data.current_weather){
//                document.getElementById("weather").innerHTML =
//                   `<h3>Weather in ${city}</h3>
//                   <p> 🌡️Temp: ${data.current_weather.temperature}°C</p>
//                   <p> 🌬️Wind: ${data.current_weather.windspeed} km/h</p>
//                   <p> 🕒Time: ${data.current_weather.time}</p>`;
//             }
//             else{
//                document.getElementById("weather").innerHTML = "⚠️Weather data not available";
//             }
//          })
//             .catch(error => {
//                 document.getElementById("weather")
//                 .innerHTML = "⚠ Error fetching data";
//             });
//         });
// 
// const cityCoords = {
//    "bangalore": { lat: 12.97, lon: 77.59 },
//    "mumbai": { lat: 19.07, lon: 72.87 },
//    "delhi": { lat: 28.61, lon: 77.20 },
//    "chennai": { lat: 13.08, lon: 80.27 },
//    "kolkata": { lat: 22.57, lon: 88.36 }
// };

// document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
//    let city = document.getElementById("cityInput").value.toLowerCase().trim();

//    if (!cityCoords[city]) {
//       document.getElementById("weather").innerHTML = "⚠️ City not in list";
//       return;
//    }

//    let coords = cityCoords[city];
//    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

//    fetch(url)
//       .then(res => res.json())
//       .then(data => {
//          if (data.current_weather) {
//             document.getElementById("weather").innerHTML =
//                `<h3>Weather in ${city}</h3>
//                 <p>🌡️ Temp: ${data.current_weather.temperature}°C</p>
//                 <p>🌬️ Wind: ${data.current_weather.windspeed} km/h</p>
//                 <p>🕒 Time: ${data.current_weather.time}</p>`;
//          } else {
//             document.getElementById("weather").innerHTML = "⚠️ Weather data not available";
//          }
//       })
//       .catch(err => {
//          document.getElementById("weather").innerHTML = "⚠️ Error fetching weather data";
//          console.error(err);
//       });
// });
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "chennai": { lat: 13.08, lon: 80.27 },
  "kolkata": { lat: 22.57, lon: 88.36 }
};

$(document).ready(function() {
  $("#fetchWeatherBtn").click(function() {
    let city = $("#cityInput").val().toLowerCase().trim();

    if (!cityCoords[city]) {
      $("#weather").html("⚠️ City not in list");
      return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    $.getJSON(url)
      .done(function(data) {
        if (data.current_weather) {
          const { temperature, windspeed, time } = data.current_weather;
          $("#weather").html(`
            <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
            <p>🌡️ Temperature: ${temperature}°C</p>
            <p>🌬️ Wind Speed: ${windspeed} km/h</p>
            <p>🕒 Time: ${new Date(time).toLocaleString()}</p>
          `);
         } 
        else {
          $("#weather").html("⚠️ Weather data not available");
        }
      })
      .fail(function(err) {
        $("#weather").html("⚠️ Error fetching weather data");
        console.error("Weather API Error:", err);
      });
  });
});


