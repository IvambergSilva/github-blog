import axios from "axios";

export const apiGitHubUser = axios.create({
    baseURL: 'https://api.github.com/users'
});

export const apiGitHubSearch = axios.create({
    baseURL: 'https://api.github.com/search/issues'
});

export const apiIssues = axios.create({
    baseURL: 'https://api.github.com/repos'
});