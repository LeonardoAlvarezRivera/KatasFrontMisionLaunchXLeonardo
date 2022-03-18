const lblName = document.getElementById("name");
const lblNumber = document.getElementById("number");
const imgPokemon = document.getElementById("image");
const lblHeigth = document.getElementById("height");
const lblWeigth = document.getElementById("weigth");
const lblCountMoves = document.getElementById("countMoves");
const containerTypes = document.getElementById("types");
const containerStats = document.getElementById("pokedex-chips-stats");
const btnSearchPokemon = document.getElementById("btnSearchByName");

let movesBody = $("#moves");

let showPokemonList= () =>{
  let list = document.getElementById("list");
  let htmlItems = "";
  for(i=1;i<=898; i++)
  {
    htmlItems += "<a class='pokemon-item-list' onclick='getById("+i+")'>"+i+"</a>";
  }
  list.innerHTML= htmlItems;
};

let getById = (id) => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
  .then(response => 
    {
        if(response.ok){
            return response.json();
        }else{
            showError();
        }
    })
  .then(data => showData(data));

};

let showError = () =>{
    alert("Intenta de nuevo mas tarde")

};

let showData = (data) => {
    lblNumber.innerText = "#"+data.id;
    lblName.innerText = data.name;
    lblHeigth.innerText = "Altura: "+(data.height* .3048)+ " Metros";
    lblWeigth.innerText = "Peso: " + (data.weight*.453592) + " Kg";
    lblCountMoves.innerText =  data.moves.length + " Moves";
    imgPokemon.src = data.sprites.front_default;

    //subir los tipos del pokemon a mostrar
    let htmlTypes="";
    containerTypes.innerHTML = "";
    data.types.forEach(
        type =>{
            htmlTypes+= "<h3 class='pokemon-type'>"+type.type.name+"</h3>";
        }
    );
    containerTypes.innerHTML = htmlTypes;

    //mostrar las estadisticas del pokemon
    let htmlStats="";
    containerStats.innerHTML = "";
    data.stats.forEach(
        stat =>{
            htmlStats+= "<h3 class='pokemon-chip-stat'>"+stat.stat.name+": "+stat.base_stat+"</h3>";
        }
    );
    containerStats.innerHTML = htmlStats;

    //mostrar los movimientos del pokemon
    movesBody.empty();
    data.moves.forEach(element => {
        movesBody.append("<h3 class='pokemon-details'> " +element.move.name+"</h3>");
    }); 
 
};

let resizeMainWindow = () =>{
    let containerMoves = $("#section-moves");
    let movesHeader = $("#header-moves");

    let newHeigrth = containerMoves.height() - movesHeader.height();
    movesBody.height(newHeigrth);
};

window.addEventListener('resize', resizeMainWindow);


//Pokemon por defecto
getById("1");
showPokemonList();
resizeMainWindow();
btnSearchPokemon.addEventListener('click',search = function(){
    let inputPokemon = document.getElementById("pokemonName");
    pokemonName = inputPokemon.value.toLocaleLowerCase();
    if(pokemonName !== "")
    {
        getById(pokemonName);
    }
    
} ,false)

