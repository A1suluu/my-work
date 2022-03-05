document.addEventListener("DOMContentLoaded", myMainFunction)

function myMainFunction() {
 
    const search_form = document.querySelector(".search_form")
    search_form.addEventListener("submit", (event) => {
        event.preventDefault()
        submitForm()
    })
    let info = document.querySelector(".info")
    info.style.display = "none"
    // document.querySelector("button").addEventListener("click", submitForm)
}
 
function submitForm() {  
    const search_input = document.querySelector(".search_input").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_input}&appid=11c0d3dc6093f7442898ee49d2430d20`)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log("123")
            let temp = convert(data.main.temp)
            let info = document.querySelector(".info")
            info.style.display = "block"
            document.querySelector(".city").innerText = search_input
            document.querySelector(".temp").innerText = temp
        })
}
 
function convert(temperature) {
    let t = Math.round(temperature - 273.15)
    if ( t > 0 ) {
        t = `+${t}`
    }
    return t
}




// assignments 

// 1. create web 2 pages with html and css code 
// 2. create detail page and page to searching and finding information
// 3. commit and add most of all changings
// 4. create some logical js code to fund any information about news.
// Fetch other site in order to user could find any current info 
// 5. also fetch detail html with any current news. Like current information about maybe 
// dollar exchange rate or current info from Ukraine
// 6. check all my code and site


// what are ypu thinkimg about us === saving in localStorage
// advisor === going to telegrame chat
// sharing with news with ur friends
// login that user may to create 
// Удаление element from id of object


// Просмотр детали новости по id 
//Создание новости
// Просмотр новости
// Редактирование новости
