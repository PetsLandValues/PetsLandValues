const container =
document.getElementById("valuesContainer");


const search =
document.getElementById("search");


const rarity =
document.getElementById("rarityFilter");


const demand =
document.getElementById("demandFilter");


const version =
document.getElementById("versionFilter");


const sort =
document.getElementById("sortFilter");



function getDemand(level){

if(level===1) return "★☆☆";

if(level===2) return "★★☆";

if(level===3) return "★★★";

if(level===4) return "★★★🔥";

return "";

}




function renderPets(){


let result=[...pets];



let text =
search.value.toLowerCase();



if(text){

result =
result.filter(pet =>
pet.name
.toLowerCase()
.includes(text)
);

}



if(rarity.value !== "all"){


result =
result.filter(
pet =>
pet.rarity === rarity.value
);


}



if(demand.value !== "all"){


result =
result.filter(
pet =>
pet.demand == demand.value
);


}




const selectedVersion =
version.value;



if(sort.value==="valueHigh"){


result.sort(
(a,b)=>
b.values[selectedVersion]
-
a.values[selectedVersion]
);


}


if(sort.value==="valueLow"){


result.sort(
(a,b)=>
a.values[selectedVersion]
-
b.values[selectedVersion]
);


}


if(sort.value==="demandHigh"){


result.sort(
(a,b)=>
b.demand-a.demand
);


}



if(sort.value==="demandLow"){


result.sort(
(a,b)=>
a.demand-b.demand
);


}



if(sort.value==="az"){


result.sort(
(a,b)=>
a.name.localeCompare(b.name)
);


}


if(sort.value==="za"){


result.sort(
(a,b)=>
b.name.localeCompare(a.name)
);


}




container.innerHTML="";



result.forEach(pet=>{


container.innerHTML += `


<div class="pet-card">


<img src="${pet.image}">


<div class="pet-info">


<div class="pet-name">

${pet.name}

</div>



<div class="rarity">

⭐ ${pet.rarity}

</div>



<div class="value">


💰 ${pet.values.normal}


<br>


💿 ${pet.values.vintage}


<br>


🔮 ${pet.values.neon}


</div>



<div class="demand">

${getDemand(pet.demand)}

</div>



</div>


</div>


`;


});


}



search.addEventListener(
"input",
renderPets
);


rarity.addEventListener(
"change",
renderPets
);


demand.addEventListener(
"change",
renderPets
);


version.addEventListener(
"change",
renderPets
);


sort.addEventListener(
"change",
renderPets
);



renderPets();
