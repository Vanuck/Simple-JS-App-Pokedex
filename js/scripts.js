// Variables
// Height is in meters

let pokemonList = [
    {
        name: 'Wartortle', 
        height: 1, 
        type: ['water']
    },
    {
        name: 'Primeape', 
        height: 1, 
        type: ['fighting']
    },
    {
        name: 'Ekans', 
        height: 2, 
        type: ['poison']
    },
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.5)
     {document.write(pokemonList[i].name + "  " + "(height:"+ "  " +  pokemonList[i].height + " ) " + "- Wow. That's big!"+ "<br>"); 
     //condition put in for pokemon with the height taller than 1.5 
  } else {
  document.write(pokemonList[i].name + "  " + "(height:"+ "  " +  pokemonList[i].height + " ) " + "<br>");}
  }