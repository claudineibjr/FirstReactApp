var axios = require('axios');

var GitHubUser = {
    getByUsername: function(username){
        return axios.get("https://api.github.com/users/" + username);
    },

    getReposByUser: function(username){
        return axios.get("https://api.github.com/users/" + username + "/repos");
    }
};

module.exports = GitHubUser;