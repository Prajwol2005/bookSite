/*let userin
let randomBooks = "https://www.googleapis.com/books/v1/volumes?q="


$(".randomBookGenerator").click(function () {
  fetch(randomBooks)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
    let x = json.
    });
});
*/

$(".randomBookGenerator").click(function () {
  let userInput = $(".searchTerm").val();
  console.log(userInput);

  let randomBook = `https://www.googleapis.com/books/v1/volumes?q=${userInput}`; /*&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1*/
  fetch(randomBook)
    .then(function (response) {
      return response.json();
    })

    .then(function (randomBookInfo) {
      console.log(randomBookInfo);
      //var url = (data["data"][0]["embed_url"]);
      //var url = "https://media4.giphy.com/media/njtPBlbYnHAHK/giphy-downsiz"
      var rando = Math.floor(Math.random() * randomBookInfo["items"].length);
      var randomInfo = randomBookInfo["items"][rando]["volumeInfo"];
      var title = randomInfo.title;
      var authors = randomInfo.authors;
      var publisher = randomInfo.publisher;
      var publishedDate = randomInfo.publishedDate;
      var smallThumbnail = randomInfo.imageLinks.smallThumbnail;
      console.log(randomInfo);
      $(".thumbnail").append(
        `<img class="gif" crossorigin="anonymous" src=${smallThumbnail}/>`
      );
      $(".bigInfo").append(
        `<p class="E">Title: ${title} <br> Author:${authors} <br> publisher: ${publisher} <br> Published Date: ${publishedDate} <br > </p>`
      );
      return;
    });
});
