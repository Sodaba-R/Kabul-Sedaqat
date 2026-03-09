let properties = JSON.parse(localStorage.getItem("properties")) || [

{
zone:1,
type:"rent",
title:"2 Bedroom Family House",
price:"$500 / month",
image:"https://picsum.photos/300?1",
description:"A comfortable 2 bedroom house located in Zone 1 close to schools and shops."
},

{
zone:2,
type:"sale",
title:"Modern House",
price:"$80,000",
image:"https://picsum.photos/300?2",
description:"Modern family home in a quiet neighbourhood."
}

]
{
zone:1,
type:"sale",
title:"Modern Family Home",
price:"$80,000",
image:"https://picsum.photos/300?2",
description:"A modern family home with a large garden and parking space."
},

{
zone:2,
type:"rent",
title:"City Apartment",
price:"$400 / month",
image:"https://picsum.photos/300?3",
description:"Apartment located in the centre with easy access to transport."
},

{
zone:3,
type:"mortgage",
title:"Luxury Villa",
price:"$1000 / month mortgage",
image:"https://picsum.photos/300?4",
description:"Large villa with 4 bedrooms, balcony and beautiful views."
},

{
zone:4,
type:"shared",
title:"Shared Student Room",
price:"$200 / month",
image:"https://picsum.photos/300?5",
description:"Shared accommodation perfect for students."
},

{
zone:5,
type:"sale",
title:"Luxury House",
price:"$120,000",
image:"https://picsum.photos/300?6",
description:"Spacious luxury home in a quiet neighbourhood."
},

{
zone:6,
type:"rent",
title:"Studio Apartment",
price:"$300 / month",
image:"https://picsum.photos/300?7",
description:"Small studio apartment suitable for one person."
},

{
zone:7,
type:"shared",
title:"Shared Flat",
price:"$250 / month",
image:"https://picsum.photos/300?8",
description:"Shared flat with two rooms available."
},

{
zone:8,
type:"sale",
title:"Town House",
price:"$90,000",
image:"https://picsum.photos/300?9",
description:"Town house located close to the market area."
},

{
zone:9,
type:"mortgage",
title:"Modern House",
price:"$900 / month mortgage",
image:"https://picsum.photos/300?10",
description:"Modern house available with flexible mortgage options."
},

{
zone:10,
type:"rent",
title:"Small Apartment",
price:"$350 / month",
image:"https://picsum.photos/300?11",
description:"Affordable apartment ideal for couples."
}

]
function showZone(zone){
selectedZone = zone
displayListings()
}

function filterType(type){
selectedType = type
displayListings()
}

function displayListings(){

let html=""

properties.forEach(p=>{

if(selectedZone && p.zone !== selectedZone) return
if(selectedType !== "all" && p.type !== selectedType) return

html += `
<div class="card">
<img src="${p.image}">
<div class="card-content">
<h3>${p.title}</h3>
<p>Zone: ${p.zone}</p>
<p>Type: ${p.type}</p>
<p class="price">${p.price}</p>
</div>
</div>
`

})

document.getElementById("listings").innerHTML = html

}

function displayListings(){

let html=""

properties.forEach((p,index)=>{

if(selectedZone && p.zone !== selectedZone) return
if(selectedType !== "all" && p.type !== selectedType) return

html += `
<div class="card" onclick="openPopup(${index})">
<img src="${p.image}">
<div class="card-content">
<h3>${p.title}</h3>
<p>Zone: ${p.zone}</p>
<p>Type: ${p.type}</p>
<p class="price">${p.price}</p>
</div>
</div>
`

})

document.getElementById("listings").innerHTML = html

}
function openPopup(index){
<button>Contact Agent</button>
let p = properties[index]

document.getElementById("popupDetails").innerHTML = `
<h3>${p.title}</h3>
<img src="${p.image}" style="width:100%">
<p><strong>Zone:</strong> ${p.zone}</p>
<p><strong>Type:</strong> ${p.type}</p>
<p><strong>Price:</strong> ${p.price}</p>
<p>${p.description}</p>
<p><strong>Contact our office for viewing.</strong></p>
`

document.getElementById("popup").style.display="block"

}

function closePopup(){
document.getElementById("popup").style.display="none"
}

function searchProperty(){

let search = document.getElementById("searchInput").value.toLowerCase()

let html=""

properties.forEach((p,index)=>{

if(p.title.toLowerCase().includes(search)){

html += `
<div class="card" onclick="openPopup(${index})">
<img src="${p.image}">
<div class="card-content">
<h3>${p.title}</h3>
<p>Zone: ${p.zone}</p>
<p class="price">${p.price}</p>
</div>
</div>
`

}

})

document.getElementById("listings").innerHTML = html

}
function addProperty(){

let newProperty = {

title: document.getElementById("title").value,
price: document.getElementById("price").value,
zone: Number(document.getElementById("zone").value),
type: document.getElementById("type").value,
description: document.getElementById("description").value,
image: document.getElementById("image").value

}

properties.push(newProperty)

localStorage.setItem("properties", JSON.stringify(properties))

alert("Property added!")

}