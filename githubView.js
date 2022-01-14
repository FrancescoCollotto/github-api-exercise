class GithubView {
  constructor(api) {
    this.api = api;
    this.button = document.querySelector('#btn');
    this.button.addEventListener('click', () => {
      const repoName = document.querySelector('#repo-name').value;
      this.api.getRepoInfo(repoName, (data) => {
        console.log(data);
      })
    })
    // select button
    // addEvent listener to the button
    //   api.getrepoInfo
    //    create html elements  with data from api
  }

}

module.exports = GithubView;