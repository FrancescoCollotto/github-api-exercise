(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // githubApi.js
  var require_githubApi = __commonJS({
    "githubApi.js"(exports, module) {
      var GithubApi2 = class {
        getRepoInfo(repoName, callback) {
          fetch(`https://api.github.com/repos/${repoName}`).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = GithubApi2;
    }
  });

  // githubView.js
  var require_githubView = __commonJS({
    "githubView.js"(exports, module) {
      var GithubView2 = class {
        constructor(api2) {
          this.api = api2;
          this.button = document.querySelector("#btn");
          this.button.addEventListener("click", () => {
            const repoName = document.querySelector("#repo-name").value;
            this.api.getRepoInfo(repoName, (data) => {
              this.createHTMLEl(data);
            });
          });
        }
        createHTMLEl(data) {
          const mainContainer = document.querySelector("#main-container");
          let newH2 = document.createElement("h2");
          newH2.innerText = data.name;
          mainContainer.append(newH2);
          let profilPic = document.createElement("img");
          profilPic.src = data.owner.avatar_url;
          mainContainer.append(profilPic);
          let stargazers = document.createElement("p");
          stargazers.innerText = data.stargazers_count;
          mainContainer.append(stargazers);
          let forks = document.createElement("p");
          forks.innerText = data.forks_count;
          mainContainer.append(forks);
          let language = document.createElement("p");
          language.innerText = data.language;
          mainContainer.append(language);
          let htmlUrl = document.createElement("a");
          htmlUrl.href = data.html_url;
          htmlUrl.innerText = "more info";
          mainContainer.append(htmlUrl);
        }
      };
      module.exports = GithubView2;
    }
  });

  // index.js
  var GithubApi = require_githubApi();
  var GithubView = require_githubView();
  var api = new GithubApi();
  var view = new GithubView(api);
})();
