/*
$(".search-button").click(function () {
  let userInput = $("input").val();
  console.log(userInput);

  let gify = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;
  fetch(gify)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      //var url = (data["data"][0]["embed_url"]);
      //var url = "https://media4.giphy.com/media/njtPBlbYnHAHK/giphy-downsiz"
    $(".grid").empty()
      Array(9)
        .fill()
        .forEach((_) => {
          var rando = Math.floor(Math.random() * data.data.length);
          var url = data["data"][rando]["images"]["fixed_height"]["url"];
          $(".grid").append(`<img class="gif" crossorigin="anonymous" src=${url}/>`);
          return;
        });
    });
});
*/