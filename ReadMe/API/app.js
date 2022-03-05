document.addEventListener("DOMContentLoaded" , () => { 

const searchForm = document.querySelector(".search")
const input = document.querySelector(".input")
const newList = document.querySelector(".news-list")

searchForm.addEventListener("submit", retrieve)

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
        data.articles.forEach(article => {
            let li = document.createElement("li")
            let a = document.createElement("a")
            a.setAttribute("href", article.url)
            a.setAttribute("target", "_blank")
            a.textContent = article.title
            li.appendChild(a)
            newList.appendChild(li)
        })
        
    }).catch((error) => {
        console.log(error)
    })
    
}

})
