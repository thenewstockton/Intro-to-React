var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');

var List = React.createClass({
    getInitialState: function() {
        return {ingredients:[]};
    },
    componentWillMount: function() {
        HTTP.get('/ingredients')
        .then(function(data){
            this.setState({ingredients: data});
        }.bind(this));
    },
    render: function() {
        var createItem = function(text, index) {
            return <ListItem key={index + text} text={text}/>;
        };
        console.log(this.state.ingredients);
        return (<ul>{this.props.items.map(createItem)}</ul>);
    }
});

module.exports = List;
