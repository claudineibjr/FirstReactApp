var React = require('react'); 
var createReactClass = require('create-react-class'); 

var GitHubUser = require('../services/GitHubUser');

var SearchUser = createReactClass({ 
    handleSubmit: function(e){
        e.preventDefault();

        GitHubUser.getByUsername(this.refs.username.value).then(function(response){
            console.log(response);
        });

        GitHubUser.getReposByUser(this.refs.username.value).then(function(response){
            console.log(response);
        });

    },
    render: function(){
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control" placeholder="Ex: claudineibjr" ref="username"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar </button>
                    </form>
                </div>
            </div>
        );
    }
}); 
 
module.exports = SearchUser;