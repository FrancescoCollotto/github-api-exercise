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

  // index.js
  var GithubApi = require_githubApi();
  var api = new GithubApi();
  api.getRepoInfo("sinatra/sinatra", (data) => {
    console.log(data.forks_count);
  });
})();
