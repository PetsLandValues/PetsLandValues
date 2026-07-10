const container =
document.getElementById("petContainer");



function getDemand(level){

    switch(level){

        case 1:
            return "★☆☆";

        case 2:
            return "★★☆";

        case 3:
            return "★★★";

        case 4:
            return "★★★🔥";

        default:
            return "★☆☆";

    }

}



pets.forEach(pet=>{


container.innerHTML += `


<div class="pet-card">


<img src="${pet.image}" 
alt="${pet.name}">


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
