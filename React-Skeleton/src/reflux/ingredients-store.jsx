var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
    listenables: [Actions],
    getIngredients: function() {
        HTTP.get('/ingredients')
        .then(function(json){
            this.ingredients = json;
            this.fireUpdate();
        }.bind(this));
    },
    postIngredient: function(text){
        //Posted Ingredient to the server 
        //now we got a successful callback
        if(!this.ingredients){
            this.ingredients = [];
        }
        
        var ingredient = {
            "text": text,
            "id": Math.floor(Date.now() / 1000) + text
        };
        
        this.ingredients.push(ingredient);
        this.fireUpdate();
        HTTP.post('/ingredients',ingredient)
        .then(function(response){
            this.getIngredients();
        }.bind(this));
    },
    //Refresh function
    fireUpdate: function(){
        this.trigger('change', this.ingredients);
    }
});

module.exports = IngredientStore;