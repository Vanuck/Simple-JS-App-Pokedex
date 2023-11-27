//new pokemonRepository variable to hold what IIFE will return
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }
  function add(item) {
    if (
      typeof item === "object" && 'name' in item && 'detailsUrl' in item
    ) {
      pokemonList.push(item);
    } else {
      console.log("Please doublecheck your entry");
    }
  }

function addListItem(pokemon){
  let unorderedlist = document.querySelector('.pokemon-list');
  //li element inside the ul
  let listitem = document.createElement('li');
  //button element inside the li
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  //append button to the li listpokemon as its child
  listitem.appendChild(button);
  //append the li listpokemon to the ul pokemonList as its child
  unorderedlist.appendChild(listitem);
  //Add Event listener to button with showDetails function
button.addEventListener('click', () => showDetails(pokemon));

}

function find(name) {
  return pokemonList.find((pokemon) => pokemon.name === name);
}

function loadList() {
  return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    });
}


function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    })
    .catch(function (e) {
      console.error(e);
    });
}

function  add (pokemon) {
  pokemonList.push(pokemon);
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

return {
    getAll: getAll,
    add: add,
    find: find,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }

})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
