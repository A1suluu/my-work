document.addEventListener("DOMContentLoaded", setImg)


function setImg () {
    const firstNews = document.getElementById("firstNews")

    let url = "https://www.cnn.com/2022/02/19/sport/charley-taylor-pro-football-hall-of-famer-dies-spt/index.html"
    
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        data.articles.forEach(article => {
            firstNews.setAttribute("src", article.url)
            firstNews.innerHTML = article.urlToImage
        })
        console.log(firstNews)
    })
}

