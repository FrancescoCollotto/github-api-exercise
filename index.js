// name: name
// profile pic: owner.avatar_url
// stargazes count: stargazers_count
// forks: forks_count
// language: language
// github link: html_url

const GithubApi = require('./githubApi')
const GithubView = require('./githubView')
const api = new GithubApi()
const view = new GithubView(api)


// api.getRepoInfo("sinatra/sinatra", (data) => {
//   console.log(data.forks_count)
// })