const recentPets = document.getElementById("recentPets");

function getDemandStars(level){

    if(level === 1) return "★☆☆";
    if(level === 2) return "★★☆";
    if(level === 3) return "★★★";
    if(level === 4) return "★★★🔥";

    return "★☆☆";
}

pets.forEach(pet => {

    recentPets.innerHTML += `
        <div class="pet-card">

            <img src="${pet.image}" alt="${pet.name}">

            <div class="pet-info">

                <h3>${pet.name}</h3>

                <p>${pet.rarity}</p>

                <p>Value: ${pet.value}</p>

                <p>💿 ${pet.vintage}</p>

                <p>🔮 ${pet.neon}</p>

                <p>${getDemandStars(pet.demand)}</p>

            </div>

        </div>
    `;

});
