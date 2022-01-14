class GithubView {
  constructor(api) {
    this.api = api;
    this.button = document.querySelector("#btn");
    this.button.addEventListener("click", () => {
      const repoName = document.querySelector("#repo-name").value;
      this.clearElements()
      this.api.getRepoInfo(repoName, (data) => {
        this.createHTMLEl(data);
      });
    });
    // select button
    // addEvent listener to the button
    //   api.getrepoInfo
    //    create html elements  with data from api
  }

  createHTMLEl(data) {
    const mainContainer = document.querySelector("#main-container");
    // name: name
    let newH2 = document.createElement("h2");
    newH2.innerText = data.name;
    mainContainer.append(newH2);

    // profile pic: owner.avatar_url
    let profilPic = document.createElement("img");
    profilPic.src = data.owner.avatar_url;
    mainContainer.append(profilPic);

    // stargazes count: stargazers_count
    let stargazers = document.createElement("p");
    stargazers.innerText = data.stargazers_count;
    mainContainer.append(stargazers);

    // forks: forks_count
    let forks = document.createElement("p");
    forks.innerText = data.forks_count;
    mainContainer.append(forks);

    // language: language
    let language = document.createElement("p");
    language.innerText = data.language;
    mainContainer.append(language);

    // github link: html_url
    let htmlUrl = document.createElement("a");
    htmlUrl.href = data.html_url;
    htmlUrl.innerText = "more info";
    mainContainer.append(htmlUrl);
  }

  clearElements() {
    const mainContainer = document.querySelector("#main-container");
    mainContainer.innerHTML = "";
  }
}

module.exports = GithubView;
