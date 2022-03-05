
// function convert(temperature) {
//     let t = Math.round(temperature - 273.15)
//     if ( t > 0 ) {
//         t = `+${t}`
//     }
//     return t
// }



// $(document).bind('pageinit', function(ev) {
//     $('#search').on('keyup', function(e) {
//       if (e.keyCode == 13) {
 
//         // The Base URL
//         var baseUrl = 'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=';
 
//         // The question from the inputfield
//         var q = $('#search').val();
 
//         // putting the url togehter and append &callback=?
//         var url = baseUrl + q + "&callback=?";
//         console.log(url);
 
//         // Call The API for a JSON
//         $.getJSON(url, function() {
//           console.log("success");
//         }).done(function(data) {
//           console.log("second success");
 
//           console.log(data.responseData.results);
 
//           // create a var for the results and append a header
//           var results = '<li data-role="list-divider">Results</li>';
 
//           $.each(data.responseData.results, function(index, item) {
 
//             results += '<li>';
//             results += item.title;
//             results += '</li>';
//           });

//                    // clear the results . append the results .refresh the listview
//          $('#results').empty().append(results).listview('refresh');

//         }).fail(function() {
//           console.log("error");
//         }).always(function() {
//           console.log("always");
//         });
 
 
 
//       }
//     });
//   });





// let https = ('https');

// let subscriptionKey = 'enter key here';
// let host = 'api.cognitive.microsoft.com';
// let path = '/bing/v7.0/news/search';
// let term = 'Microsoft';


// let response_handler = function (response) {
//     let body = '';
// };

// response.on('data', function (d) {
//     body += d;
// });

// response.on('end', function () {
//     console.log('\nRelevant Headers:\n');
//     for (var header in response.headers)
//         // header keys are lower-cased by Node.js
//         if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
//              console.log(header + ": " + response.headers[header]);
//     body = JSON.stringify(JSON.parse(body), null, '  ');
//     console.log('\nJSON Response:\n');
//     console.log(body);
//  });






