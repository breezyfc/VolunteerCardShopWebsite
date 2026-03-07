const username = "YOUR_EBAY_USERNAME";

const rss = `https://corsproxy.io/?https://www.ebay.com/sch/${username}/m.html?_rss=1`;

fetch(rss)
.then(r => r.text())
.then(str => new DOMParser().parseFromString(str,"text/xml"))
.then(data => {

const items = data.querySelectorAll("item");

const listings = document.getElementById("listings");

listings.innerHTML="";

items.forEach(el=>{

const title = el.querySelector("title").textContent;
const link = el.querySelector("link").textContent;
const img = el.querySelector("enclosure")?.getAttribute("url");

listings.innerHTML += `

<a href="${link}" target="_blank">

<div class="card">

<img src="${img}">

<div class="card-body">

<h3>${title}</h3>

</div>

</div>

</a>

`;

});

});