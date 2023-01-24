const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 12;
var offset = 0;

//Realizando o get das informações dos pokemons e chamando a função convertPokemon para cara pokemon.
//Convertendo assim os dados dos pokemons em um item da lista html
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `
          <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
      
                <div class="detail">
                  <ol class="types">
                      ${pokemon.types
                        .map((type) => `<li class="type ${type}">${type}</li>`)
                        .join("")}
                  </ol>
                  <img
                    src=${pokemon.photo}
                    alt="${pokemon.name}"
                  />
                </div>
              </li>
              `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

//função para carregar mais itens
loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItens(offset, limit);
});
