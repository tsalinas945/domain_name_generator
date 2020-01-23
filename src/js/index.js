/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let domain = [];

  for (let p in pronoun)
    for (let a in adj)
      for (let n in noun) domain.push(pronoun[p] + adj[a] + noun[n] + ".com");

  let div = document.querySelector(".domain_generator");

  for (let i in domain) {
    let node = document.createElement("p");
    let text = document.createTextNode(domain[i]);
    node.appendChild(text);
    div.appendChild(node);
  }
};
