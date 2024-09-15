$(document).ready(function(){
    $('#btn-buscar').click(function(e){
        e.preventDefault();
        let nombrePokemon = $('#input-search').val().toLowerCase();
        if (nombrePokemon) {
            pokemonSearch(nombrePokemon);
        }
        $("#input-search").val("");
    });

    $("#btn-limpiar").click(function (e){
        e.preventDefault();
        $("#flex-container").empty();
        $("#input-search").val('');
    });

    function pokemonSearch(nombrePokemon){
        $.ajax({
            type: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`,
            dataType: 'JSON',
            success: function (pokemon) {
                renderPokemon(pokemon);
            },
        });
    }

    function renderPokemon(pokemon) {
        console.log(pokemon);

       
        let divPokemon = $('<div></div>').addClass('pokemon-container');

       
        let pokemonDiv = $('<div></div>').addClass('pokemon-div');

       
      
       
        $("<h2></h2>").text(pokemon.id + " " + pokemon.name.toUpperCase()).appendTo(pokemonDiv);
        $("<img>")
        .attr("src", pokemon.sprites.other['official-artwork']?.front_default || 'placeholder.png')
        .appendTo(pokemonDiv);

       
        // $("<h3></h3>").text(`${pokemon.id}`).appendTo(pokemonDiv);

       
        // $("<h4></h4>").text(pokemon.types[0].type.name).appendTo(pokemonDiv);
        $("<p></p>")
        .text("Tipo: "+ pokemon.types[0].type.name.toUpperCase())
                   .appendTo(pokemonDiv);
        
        
        divPokemon.append(pokemonDiv);

       
        $("#flex-container").append(divPokemon);
    }
});
