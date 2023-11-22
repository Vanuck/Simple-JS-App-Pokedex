//new pokemonRepository variable to hold what IIFE will return
let pokemonRepository = (function () {

// Variables
// Height is in meters

let pokemonList = [
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

//IIFE will return objects with these publis functions
function getALL() {
  return pokemonList;
}

//   adding pokemon based on the requirements
function add(pokemon){
  //  checking whether each pokemon is an object and checks keys of the pokemon object are present 
  if(typeof pokemon === 'object' && 
  "name" in pokemon){
  // "name" in pokemon
  //"height" in pokemon
  // "type" in pokemon 
  
      pokemonList.push(pokemon);
  }else{
      console.log("Pokemon is not correct")};
  }    
  //function add (pokemon) {
  //pokemonList.push(pokemon);
//}

return {
  add: add,
  getALL: getALL
};

})();

// forEach() loop that iterates over each Pokémon in the repository
pokemonRepository.getALL().forEach(function (pokemon) {
    document.write('<p>' + pokemon.name + " " + "(height: " + pokemon.height + ")" + '</p>')
})



//pokemonList.forEach(function(user) {
   // if (pokemonList.height >1.0)
    //{document.write(user.name + " " + "(height:" + user.height + ") " + " Wow. That's big!" + "<br>"); //condition put in for pokemon with the height taller than 1.0 
 // } else {
 //   {document.write(user.name + " " + "(height:" + user.height + ") " +"<br>");}
//  }


//for (let i = 0; i < pokemonList.length; i++) {
   // if (pokemonList[i].height >1.0)
   //  {document.write(pokemonList[i].name + "  " + "(height:" + "  " +  pokemonList[i].height + " ) " + " Wow. That's big!"+ "<br>"); //condition put in for pokemon with the height taller than 1.0 
 // } else {
 // document.write(pokemonList[i].name + "  " + "(height:"+ "  " +  pokemonList[i].height + " ) " + "<br>");}
 //}
