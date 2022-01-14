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
              console.log(data);
            });
          });
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
