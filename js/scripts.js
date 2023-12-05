//new pokemonRepository variable to hold what IIFE will return
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    if (typeof pokemon === "object"){  
    pokemonList.push(pokemon);
    }
}

function addListItem(pokemon){
  let pokemonList = document.querySelector('.row');
  //li element inside the ul
  let listpokemon = document.createElement('li');
  listpokemon.classList.add('list-group-item'); 
  listpokemon.classList.add('col-12'); 
  listpokemon.classList.add('col-md-4'); 
  //button element inside the li
  let button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-block');
  button.setAttribute('data-toggle', 'modal'); 
  button.setAttribute('data-target', '#modal-container');
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  //append button to the li listpokemon as its child
  listpokemon.appendChild(button);
  //append the li listpokemon to the ul pokemonList as its child
  pokemonList.appendChild(listpokemon);
  //event listener
button.addEventListener('click', function(e) {
   showDetails(pokemon);
});
}

function loadList() {
  return fetch(apiUrl).then(function (response) {
      return response.json();
  }).then(function (json) {
     json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          details: item.url
        };
        add(pokemon);
  });

       }).catch(function (e) {
      console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
      return response.json();
  }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
  }).catch(function (e) {
      console.error(e);
  });
}

function showDetails(item){
  pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
  });
}

// modal
function showModal(item) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('.modal-header');

  //modal Clear
  modalTitle.innerHTML = '';
  modalBody.innerHTML = '';

  //name in modal content
  let nameElement = $('<h1>' + item.name + '<h1>');
  //img in modal content
  let imageElement = $('<img class="modal-img"  style="width:50%">')
  imageElement.attr("src", item.imageUrl);
  //height in modal content
  let heightElement = $('<p>' + "height : " + item.height + "</p>");
  //type in modal content
  function typeCount(item) {
      if(item.types.length === 2) {
          return item.types[0].type.name + ', ' + item.types[1].type.name;
      } else {
          return item.types[0].type.name;
      }
  }
  let typeElement = $('<p>' + "types : " + item.types + "<p>");
  

  //Add new modal content
  modalTitle.appendChild(nameElement);
  modalBody.appendChild(imageElement);
  modalBody.appendChild(heightElement);
  modalBody.appendChild(typeElement);
}    

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    showDetails: showDetails
  }

})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// input search bar
let form = document.querySelector('.form-inline');
let input = document.createElement('input');
input.classList.add('form-control');
input.classList.add('mr-2');
input.classList.add('my-1');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Search');
input.setAttribute('aria-label', 'Search');
form.appendChild(input);

// search function
function searchFunction() {
    var filter, li, i, txtValue, buttonPokemon;
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName('list-group-item');
  
    // go through list items
    for (i = 0; i < li.length; i++) {
      buttonPokemon = li[i].getElementsByClassName('button-class')[0];
      txtValue = buttonPokemon.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
}

input.addEventListener('keyup', searchFunction);