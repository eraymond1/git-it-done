var getUserRepos = function(user) {

    var apiURL = "https://api.github.com/users/" + user + "/repos";

    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });


    // console.log("inside", response);
};

// console.log("outside");

getUserRepos("eraymond1");