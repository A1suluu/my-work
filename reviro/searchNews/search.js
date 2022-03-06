document.addEventListener("DOMContentLoaded" , () => { 
    
const searchForm = document.querySelector(".searchNews")
const input = document.querySelector(".inpt_serch_news")
const newList = document.querySelector(".news-list")
const searchButton = document.querySelector(".search_button")

searchButton.addEventListener("click", retrieve)

function retrieve (e) {
    if (input.value == " ") {
        alert("input value is empty")
        return
    }

    newList.innerHTML = " "
    e.preventDefault()

    
    const apiKey = "beca3e07eb544a13992c3bd77e7bdaab"
    let topic = input.value;
    
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
    
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
    
            let totalResults = document.querySelector(".totalResults")
            totalResults.textContent = `${"Total Results:" + data.totalResults}` 
        

        data.articles.forEach(article => {
            let li = document.createElement("li")
            let a = document.createElement("a")
            a.setAttribute("href", article.url)
            a.textContent = article.title
            li.appendChild(a)
            newList.appendChild(li)
            
            let conteiner = document.querySelector(".searching_b_1")
            // let newListWidth = window.getComputedStyle(newList).height
            // conteiner.style.height = `${240}px` + newListWidth
            // conteiner.style.height = newListWidth
            // console.log(newListWidth)
            conteiner.style.height = `${100}%`
            
            // let img = document.createElement("img")
            // img.setAttribute("scr", article.urlToImage)
            // li.appendChild(img)
    
           
        })
    }).catch((error) => {
        console.log(error)
    })
    
}

})
