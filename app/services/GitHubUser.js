import axios from "axios";
import React from "react";

export default class GitHubUser extends React.Component{
    getByUsername(username){
        return axios.get("https://api.github.com/users/" + username);
    }

    getReposByUser(username){
        return axios.get("https://api.github.com/users/" + username + "/repos");
    }

}