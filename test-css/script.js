
//GLOBAL URLS

let name_url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"

var pokemon_index = 1;

let pokemon_species_url = "https://pokeapi.co/api/v2/pokemon-species/" + pokemon_index.toString(); 

let pokemon_desc_url = "https://pokeapi.co/api/v2/pokemon/" + pokemon_index.toString() 

let pokemon_img_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon_index.toString() + ".png"



function updateImageUrl() {
    pokemon_species_url = "https://pokeapi.co/api/v2/pokemon-species/" + pokemon_index.toString(); 
    pokemon_desc_url = "https://pokeapi.co/api/v2/pokemon/" + pokemon_index.toString()
    pokemon_img_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon_index.toString() + ".png"
}

// let pokemon_data = []

// pokemon = DATA[0].results

// pokemon_names = []

// console.log(pokemon)


//let ivy_name = pokemon_names[1]



//name_plate.append(pokemon_names[1], text_plate )
// const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/1");
// var pokemon_data = await response.json();
// console.log(pokemon_data)


description_data = []
pokemon_names = []

async function pokemonCall(url){
    return (await fetch(url)).json()
}


function setData(data) {
    let div = this.document.getElementsByClassName("information")
    
    let p = this.document.createElement("p")

    let name_plate = this.document.getElementsByClassName("name-plate")[0]

    let text_plate = this.document.createElement("name-plate")

    name_plate.append(pokemon_names[pokemon_index - 1].name, text_plate)

    let text = data[0].flavor_text;
    div[0].append(text, p)

}

var portrait_img = document.getElementById("portrait-img")

function setImages() {
    portrait_img.src=pokemon_img_url

    var img = document.getElementById("preview-next").src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
}

function changeImages() {
    var new_img = document.getElementById("portrait-img").src=pokemon_img_url
    pokemon_index++;
}

document.getElementById("next").onclick = function() {alertbox()};

function alertbox(){
    changeImages();
    console.log(pokemon_index)
    // var img = document.getElementsById("portrait-img")
    // img.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    //window.alert("hit")
    updateImageUrl()
    return pokemon_index
}

    // console.log(text)
    


document.addEventListener("DOMContentLoaded", async () => {
    pokemon_data = await pokemonCall(pokemon_species_url);
    pokemon_name_data = await pokemonCall(name_url)
    name_data = await pokemonCall(pokemon_desc_url);
    console.log(name_data)
    console.log(pokemon_name_data.results)
    for (var i = 0; i < pokemon_name_data.results.length; i++) {
        //console.log(pokemon[i].name)
        //pokemon_names.push(pokemon[i].name)
        pokemon_names.push(pokemon_name_data.results[i])
    }

    // console.log(pokemon_data.flavor_text_entries)
    description_data.push(pokemon_data.flavor_text_entries[1])
    setData(description_data)
    setImages()
    // console.log(description_data)
})


// const element = description_data[0]