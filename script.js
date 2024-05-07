// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Tidak Ada Data Tersebut");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

async function fetchDataBro() {
  try {
    const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Tidak Ada Data Tersebut");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const pokemonImg = document.querySelector("#pokemonImg");
    const nama = data.name;
    const element = data.types[0].type.name;
    const berat = data.weight;
    const kemampuan = data.abilities[1].ability.name;

    pokemonImg.src = pokemonSprite;

    pokemonImg.style.width = "300px";

    const namaid = document.querySelector("#nama");
    const elementid = document.querySelector("#element");
    const beratid = document.querySelector("#berat");
    const kemampuanid = document.querySelector("#kemampuan");
    const detail = document.querySelector(".detail");

    detail.style.display = "flex";
    namaid.innerText = nama.toUpperCase();
    elementid.innerText = element.toUpperCase();
    beratid.innerText = berat + " Kg";
    kemampuanid.innerText = kemampuan.toUpperCase();
  } catch (error) {
    console.error(error);
  }
}
