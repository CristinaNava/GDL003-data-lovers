POKEMON.pokemon.forEach(elemento => {
  let elementImage = document.createElement("IMG");
  elementImage.setAttribute("src", elemento.img);
  elementImage.setAttribute("width", "100");
  elementImage.setAttribute("height", "100");
  root.appendChild(elementImage);
  document.getElementById("root").innerHTML += `<span class="pokemonCard" ><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}`;
});

POKEMON.pokemon.forEach(elemento => {
  document.getElementById("root").innerHTML += "<br>" + elemento.type;
});

let filterGrass = (tipo) => {
  root.innerHTML = "";
  let grass = POKEMON.pokemon.filter(pokemon => 
      {
      return pokemon.type.includes(tipo);
  });

  grass.forEach(elemento => {
      let elementImage = document.createElement("IMG");
      elementImage.setAttribute("src", elemento.img);
      elementImage.setAttribute("width", "100");
      elementImage.setAttribute("height", "100");
      root.appendChild(elementImage);
      document.getElementById("root").innerHTML += `<span class="pokemonCard"><br> ${elemento.name} <br> ${elemento.num} <br> ${elemento.type} <br> ${elemento.weaknesses}`;
  });

  window.scroll(0, 800);

};
const orderDesc = document.getElementById("orderNameAsc");
const orderAsc = document.getElementById("orderNameDesc");

orderDesc.addEventListener("click", () =>{
  let orderForDesc= data.sort(function (a,b){;
    return ((a.name < b.name) ? - 1 : ((a.name > b.name) ? -1 : 0));
  });
});
orderAsc.addEventListener("click", () =>{
  const data= POKEMON.pokemon;
  let orderForAsc = data.sort(function (a, b){
      return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
  });
});


// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

const filtrado = () => {
  return "filtrado";
};

window.example = {
  example,
  filtrado
};*/