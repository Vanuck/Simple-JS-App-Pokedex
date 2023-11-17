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

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >1.0)
     {document.write(pokemonList[i].name + "  " + "(height:" + "  " +  pokemonList[i].height + " ) " + " Wow. That's big!"+ "<br>"); //condition put in for pokemon with the height taller than 1.0 
  } else {
  document.write(pokemonList[i].name + "  " + "(height:"+ "  " +  pokemonList[i].height + " ) " + "<br>");}
  }