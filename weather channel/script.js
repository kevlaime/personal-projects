


button.addEventListener("click", function () {
    $.getJSON("https://api.chucknorris.io/jokes/random", function (data) {
      h2.textContent = data.value;
    });
});
  