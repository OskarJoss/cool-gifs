("use strict");

import "../styles/index.scss";
import hej5 from "./giphy.js";
import queryString from "query-string";

const apiKey = process.env.GIPHY_API_KEY;
console.log(apiKey);

// hej5();

// console.log(queryString.parse(location.search));

const searchBtn = document.querySelector(".search__button");
const searchField = document.querySelector(".search__field");

searchBtn.addEventListener("click", event => {
  event.preventDefault();
  const input = searchField.value;
  const searchQuery = queryString.stringify({
    api_key: apiKey,
    q: input,
    limit: 5
  });

  console.log(searchQuery);

  fetch("https://api.giphy.com/v1/gifs/search?" + searchQuery)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(json => {
      console.log(json);
    });
});
