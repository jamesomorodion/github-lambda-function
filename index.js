const axios = require('axios');
const header = {
    'Content-Type': 'application/json',
    'Authorization': process.env.TOKEN
};

exports.handler = async (event) => {
  if(event && event.body && JSON.parse(event.body).repository && JSON.parse(event.body).repository.owner){
    const org = JSON.parse(event.body).repository.owner.name;
    const repo = JSON.parse(event.body).repository.name;
    await secureRepo(org, repo);
    await createIssue(org, repo);

    return {
      statusCode: 200,
      body: "Issue created and Master branch secured."
    }
  } else {
    return {
      statusCode: 400,
      body: "Missing required attributes"
    }
  }

};
async function secureRepo(org, repo) {
  let url = 'https://api.github.com/repos/' + org + '/' + repo + '/branches/master/protection';
  let protection = require("./data/protection.json");

  header["Accept"] = "application/vnd.github.luke-cage-preview+json";

  let req = await axios.put(url, protection, {headers: header})
  .then((res) => {
    console.log("SUCCESS " + JSON.stringify(res));
  })
  .catch((err) => {
    console.log("ERROR " + JSON.stringify(err));
  });

  return req;
}
async function createIssue(org, repo){
  let url = 'https://api.github.com/repos/' + org + '/' + repo + '/issues';
  let issue = require("./data/issue.json");

  let req = await axios.post(url, issue, {headers: header})
  .then((res) => {
    console.log("SUCCESS " + JSON.stringify(res));
  })
  .catch((err) => {
    console.log("ERROR " + JSON.stringify(err));
  });

  return req;
}
