const filterButtonGrass = document.getElementById("filterGrass");
const filterButtonNormal = document.getElementById("filterNormal");
const filterButtonFire = document.getElementById("filterFire");
const filterButtonPoison = document.getElementById("filterPoison");
const filterButtonElectric = document.getElementById("filterElectric");
const filterButtonIce = document.getElementById("filterIce");
const filterButtonFighting = document.getElementById("filterFighting");
const filterButtonGround = document.getElementById("filterGround");
const filterButtonFlying = document.getElementById("filterFlying");
const filterButtonPsychic = document.getElementById("filterPsychic");
const filterButtonBug = document.getElementById("filterBug");
const filterButtonRock = document.getElementById("filterRock");
const filterButtonGhost = document.getElementById("filterGhost");
const filterButtonDragon = document.getElementById("filterDragon");
const filterButtonDark = document.getElementById("filterDark");
const filterButtonSteel = document.getElementById("filterSteel");
const filterButtonFairy = document.getElementById("filterFairy");

POKEMON.pokemon.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    elementImage.setAttribute("cards", "");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

POKEMON.pokemon.forEach(elemento => {
    document.getElementById("root").innerHTML += "<br>" + elemento.type;
});

let filterGrass = () => {
    root.innerHTML = "";
    let grass = POKEMON.pokemon.filter(gras => {
        return gras.type.includes("Grass");
    });

    grass.forEach(elemento => {
        let elementImage = document.createElement("IMG");
        elementImage.setAttribute("src", elemento.img);
        elementImage.setAttribute("width", "100");
        elementImage.setAttribute("height", "100");
        root.appendChild(elementImage);
        document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
    });

    window.scroll(0, 600);
  
};

//comienza tipoNormal

let filterNormal = () => {
     root.innerHTML = "";
     let normals = POKEMON.pokemon.filter(normal => {
         return normal.type.includes("Normal");
    })
    normals.forEach(elemento => {
     let elementImage = document.createElement("IMG");
     elementImage.setAttribute("src", elemento.img);
     elementImage.setAttribute("width", "100");
     elementImage.setAttribute("height", "100");
     root.appendChild(elementImage);
     document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
    });

    window.scroll(0, 600);
};

//comienza tipoFire

let filterFire = () => {
    root.innerHTML = "";
    let fires = POKEMON.pokemon.filter(fire => {
        return fire.weaknesses.includes("Fire");
   })
    fires.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoPoison

let filterPoison = () => {
    root.innerHTML = "";
    let poisons = POKEMON.pokemon.filter(poison => {
        return poison.type.includes("Poison");
   })
   poisons.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoElectric

let filterElectric = () => {
    root.innerHTML = "";
    let electrics = POKEMON.pokemon.filter(electric => {
        return electric.type.includes("Electric");
   })
   electrics.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoIce

let filterIce = () => {
    root.innerHTML = "";
    let ices = POKEMON.pokemon.filter(ice => {
        return ice.type.includes("Ice");
   })
   ices.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoFighting

let filterFighting = () => {
    root.innerHTML = "";
    let fightings = POKEMON.pokemon.filter(fighting => {
        return fighting.weaknesses.includes("Fighting");
   })
   fightings.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoGround

let filterGround = () => {
    root.innerHTML = "";
    let grounds = POKEMON.pokemon.filter(ground => {
        return ground.type.includes("Ground");
   })
   grounds.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoFlying

let filterFlying = () => {
    root.innerHTML = "";
    let flyings = POKEMON.pokemon.filter(flying => {
        return flying.type.includes("Flying");
    })
    flyings.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoPsychic

let filterPsychic = () => {
    root.innerHTML = "";
    let psychics = POKEMON.pokemon.filter(psychic => {
        return psychic.type.includes("Psychic");
    })
    psychics.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoBug

let filterBug = () => {
    root.innerHTML = "";
    let bugs = POKEMON.pokemon.filter(bug => {
        return bug.type.includes("Bug");
    })
    bugs.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoRock

let filterRock = () => {
    root.innerHTML = "";
    let rocks = POKEMON.pokemon.filter(rock => {
        return rock.type.includes("Rock");
    })
    rocks.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoGhost

let filterGhost = () => {
    root.innerHTML = "";
    let ghosts = POKEMON.pokemon.filter(ghost => {
        return ghost.type.includes("Ghost");
    })
    ghosts.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoDragon

let filterDragon = () => {
    root.innerHTML = "";
    let dragons = POKEMON.pokemon.filter(dragon => {
        return dragon.type.includes("Dragon");
    })
    dragons.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoDark

let filterDark = () => {
    root.innerHTML = "";
    let darks = POKEMON.pokemon.filter(dark => {
        return dark.type.includes("Dark");
    })
    darks.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

//comienza tipoSteel

let filterSteel = () => {
    root.innerHTML = "";
    let steels = POKEMON.pokemon.filter(steel => {
        return steel.type.includes("Steel");
    })
    steels.forEach(elemento => {
    let elementImage = document.createElement("IMG");
    elementImage.setAttribute("src", elemento.img);
    elementImage.setAttribute("width", "100");
    elementImage.setAttribute("height", "100");
    root.appendChild(elementImage);
    document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}<>`;
});

window.scroll(0,600);

};

filterButtonGrass.addEventListener("click", filterGrass);
filterButtonNormal.addEventListener("click", filterNormal);
filterButtonFire.addEventListener("click", filterFire);
filterButtonPoison.addEventListener("click", filterPoison);
filterButtonElectric.addEventListener("click", filterElectric);
filterButtonIce.addEventListener("click", filterIce);
filterButtonFighting.addEventListener("click", filterFighting);
filterButtonGround.addEventListener("click", filterGround);
filterButtonFlying.addEventListener("click", filterFlying);
filterButtonPsychic.addEventListener("click", filterPsychic);
filterButtonBug.addEventListener("click", filterBug);
filterButtonRock.addEventListener("click", filterRock);
filterButtonGhost.addEventListener("click", filterGhost);
filterButtonDragon.addEventListener("click", filterDragon);
filterButtonDark.addEventListener("click", filterDark);
filterButtonSteel.addEventListener("click", filterSteel);


let btnmenu = document.getElementById("btn-menu");
let nav = document.getElementById("nav");



btnmenu.addEventListener("click", function () {
    nav.classList.toggle("muestrate");
});





