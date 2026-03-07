javascript
const username = "YOUR_EBAY_USERNAME";

const url = `https://corsproxy.io/?https://www.ebay.com/sch/${username}/m.html?_rss=1`;

fetch(url)
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str,"text/xml"))
.then(data => {

const items = data.querySelectorAll("item");
const container = document.getElementById("listings");

container.innerHTML="";

items.forEach(el=>{

const title = el.querySelector("title").textContent;
const link = el.querySelector("link").textContent;
const img = el.querySelector("enclosure")?.getAttribute("url") || "";

const card = `

<a href="${link}" target="_blank">

<div class="card">

<img src="${img}">

<div class="card-body">

<h3>${title}</h3>

</div>

</div>

</a>

`;

container.innerHTML += card;

});

});