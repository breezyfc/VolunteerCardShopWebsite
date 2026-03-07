const username = "YOUR_EBAY_USERNAME";

const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
`https://www.ebay.com/sch/${username}/m.html?_nkw=&_ipg=200&rt=nc`
)}`;

fetch(url)
.then(res => res.json())
.then(data => {

const parser = new DOMParser();
const doc = parser.parseFromString(data.contents, "text/html");

const items = doc.querySelectorAll(".s-item");

let html = "";

items.forEach(item => {

const title = item.querySelector(".s-item__title")?.innerText;
const price = item.querySelector(".s-item__price")?.innerText;
const img = item.querySelector(".s-item__image-img")?.src;
const link = item.querySelector(".s-item__link")?.href;

if(title && price && img){

html += `
<a class="card-item" href="${link}" target="_blank">

<img src="${img}">

<div class="card-info">
<h3>${title}</h3>
<p class="price">${price}</p>
</div>

</a>
`;

}

});

document.getElementById("ebay-listings").innerHTML = html;

});