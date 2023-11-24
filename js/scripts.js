//new pokemonRepository variable to hold what IIFE will return
let pokemonRepository = (function () {

// Variables
// Height is in meters

let repository = [
    {
        name: 'Wartortle', 
        height: 1.0,
        type: ['water']
    },
    {
        name: 'Ekans', 
        height: 2.0, 
        type: ['poison']
    },
    {
        name: 'Primeape', 
        height: 1.0, 
        type: ['fighting']
    },
];

//IIFE will return objects with these public functions
function getALL() {
  return repository;
}

//adding pokemon based on the requirements
function add(pokemon){
  //  checking whether each pokemon is an object and checks keys of the pokemon object are present 
  if(typeof pokemon === 'object' && 
  "name" in pokemon){
  // "name" in pokemon
  //"height" in pokemon
  // "type" in pokemon 
  
      repository.push(pokemon);
  }
  //else{
    //  console.log("Pokemon is not correct")};
  }    
  //function add (pokemon) {
  //pokemonList.push(pokemon);
//}

function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  //li element inside the ul
  let listpokemon = document.createElement('li');
  //button element inside the li
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  //append button to the li listpokemon as its child
  listpokemon.appendChild(button);
  //append the li listpokemon to the ul pokemonList as its child
  pokemonList.appendChild(listpokemon);
  //Add Event listener to button with showDetails function
button.addEventListener('click', function() {
  showDetails(pokemon);
});
}

function showDetails(pokemon){
  console.log(pokemon);
}

return {
  add: add,
  getALL: getALL,
  addListItem: addListItem,
  showDetails: showDetails
};

})();
pokemonRepository.getALL().forEach(function (pokemon){

  pokemonRepository.addListItem(pokemon);
});
