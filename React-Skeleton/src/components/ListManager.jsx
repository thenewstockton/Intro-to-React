var React = require('react');
var List = require('./List.jsx');
var HTTP = require('../services/httpservice');

var ListManager = React.createClass({
    getInitialState: function() { //Called when components first loaded
        return {items: [], newItemText:''};
    },
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    //this.pros: read-only
    //this.state: mutable data
    //components have state and props
    handleSubmit: function(e) { 
        e.preventDefault();
        
        var currentItems = this.state.items;
        
        currentItems.push(this.state.newItemText);
        //this.state.items = currentItems;
        //this.state.newItemText = "";
        this.setState({items: currentItems, newItemText:''});
    },
    render: function() { 
        
        var divStyle = {
            marginTop: 10
        };
        
        var headingStyle = {
            
        };
        
        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }
        
        //always: column row column row
        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>
                            {this.props.title}
                        </h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText}/>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                        
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
});

module.exports = ListManager;
