// document.addEventListener("DOMContentLoaded", myMainFunction)

// function myMainFunction() {
 
//     const search_form = document.querySelector(".search_form")
//     search_form.addEventListener("submit", (event) => {
//         event.preventDefault()
//         submitForm()
//     })
//     let info = document.getElementById("info")
//     info.style.display = "none"
//     // document.querySelector("button").addEventListener("click", submitForm)
// }
 
// function submitForm() {  
//     const search_input = document.querySelector(".search_input").value
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_input}&appid=11c0d3dc6093f7442898ee49d2430d20`)
//         .then(response => {
//             console.log(response)
//             return response.json()
//         })
//         .then(data => {
//             console.log("123")
//             let temp = convert(data.main.temp)
//             let info = document.getElementById("info")
//             info.style.display = "block"
//             document.getElementById("city").innerText = search_input
//             document.getElementById("temp").innerText = temp
//         })
// }
 
// function convert(temperature) {
//     let t = Math.round(temperature - 273.15)
//     if ( t > 0 ) {
//         t = `+${t}`
//     }
//     return t
// }