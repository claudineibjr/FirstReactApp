var React = require('react');
var createReactClass = require('create-react-class');

var SearchUser = require('./SearchUser');

var GitHub = createReactClass({
    render: function(){
        return (
            <div className="container">
                <SearchUser/>
            </div>
        );
    }
});

module.exports = GitHub;