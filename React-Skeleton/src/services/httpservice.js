var Fetch = require('whatwg-fetch');
//http://localhost:6069/ingredients
var baseUrl = 'http://localhost:6069';


var service = {
    get: function(url){
        console.log("Making request");
        return fetch(baseUrl + url).
        then(function(response){
            return response.json();
        });
    }
}

module.exports = service;
