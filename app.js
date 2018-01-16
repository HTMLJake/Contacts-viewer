let main = document.getElementById('main');

fetch("https://randomuser.me/api/?results=20").then(function (response) {
        return response.json();
    }).then(function (data) {
        var view = new Vue({
            el: main,
            data: data
        });
        //console.log(data);
    })
    .catch(function (error) {
        console.error(error);
    });