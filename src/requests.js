// most popular repository by stars
axios.get(`https://api.github.com/search/repositories?q=user:facebook&sort=stars&order=desc`)
.then(function (response) {
console.log("yes i have", response);
})

// most popular repository by forks  axios.get('https://api.github.com/search/repositories?q=user:facebook&sort=forks&order=desc')
axios.get('https://api.github.com/search/repositories?q=user:facebook&sort=forks&order=desc')
.then(function (response) {
console.log("yes i have", response);
})
