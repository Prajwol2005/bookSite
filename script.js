$(".randomBookGenerator").click(function () {
  /*let userInput = $("input").val();
  console.log(userInput);*/
  let randomBooks = `https://www.googleapis.com/books/v1/volumes?q=harry%20potter`;
  fetch(randomBooks)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let randomNum = Math.floor(Math.random() * 3);

      /* let randomBooks = `https://www.googleapis.com/books/v1/volumes?q=harry%20potter`;
  fetch(randomBooks)
    .then(function (response) {
      console.log(response);
      return response.json();
    })

    .then(function (data) {
      console.log(data); 
      //var url = (data["data"][0]["embed_url"]);
      //var url = "https://media4.giphy.com/media/njtPBlbYnHAHK/giphy-downsiz"
      /* $(".grid").empty()
      Array(9)
        .fill()
        .forEach((_) => {
          var rando = Math.floor(Math.random() * data.data.length);
          var url = data["data"][rando]["images"]["fixed_height"]["url"];
          $(".grid").append(`<img class="gif" crossorigin="anonymous" src=${url}/>`);
          return;
        }); */
    });
});
