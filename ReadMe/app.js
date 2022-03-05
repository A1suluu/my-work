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



 $(document).bind('pageinit', function(ev) {
   $('#search').on('keyup', function(e) {
     if (e.keyCode == 13) {

       // The Base URL
       var baseUrl = 'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=';

       // The question from the inputfield
       var q = $('#search').val();

       // putting the url togehter and append &callback=?
       var url = baseUrl + q + "&callback=?";
       console.log(url);

       // Call The API for a JSON
       $.getJSON(url, function() {
         console.log("success");
       }).done(function(data) {
         console.log("second success");

         console.log(data.responseData.results);

         // create a var for the results and append a header
         var results = '<li data-role="list-divider">Results</li>';

$.each(data.responseData.results, function(index, item) {

    results += '<li>';
    results += item.title;
    results += '</li>';
  });



  // clear the results . append the results .refresh the listview
  $('#results').empty().append(results).listview('refresh');

}).fail(function() {
  console.log("error");
}).always(function() {
  console.log("always");
});



}
});
});