package com.example.pokedatax.controller;

import com.example.pokedatax.client.PokemonClientApi;
import com.example.pokedatax.model.Pokemon;
import com.example.pokedatax.model.PokemonDescription;
import com.example.pokedatax.model.TypeDetail;
import com.example.pokedatax.model.TypeDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5173/")
@RestController
@RequestMapping("/api")
public class PokemonController {


    @Autowired
    private PokemonClientApi pokemonClientApi;
    @GetMapping("/pokemon/{name}")
    public Pokemon getPokemonByName(@PathVariable String name) {

        Pokemon pokemon = pokemonClientApi.getDataPokemon(name);
        PokemonDescription description = pokemonClientApi.getPokemonDescription(name);

        //For each para iterar cada descripción
        for (PokemonDescription.flavor_text_entries entry : description.getFlavor_text_entries()) {
            if (entry.getLanguage().getName().equals("es")) /* Buscamos el lenguaje español*/  {
                //Añadimos a nuestro pokemon, la descripción en español encontrada. Y hacemos break para que deje de buscar
                pokemon.setFlavor_text(entry.getFlavor_text());
                break;
            }
        }

        /*for (Pokemon.Types type : pokemon.getTypes()) {
            TypeDetails typeDetails = pokemonClientApi.getTypeDetails(String.valueOf(type.getType().getId()));
            Pokemon.TypeDetails pokemonTypeDetails = new Pokemon.TypeDetails();
            pokemonTypeDetails.setName(typeDetails.getName());
            pokemonTypeDetails.setId(typeDetails.getId());
            type.setType(pokemonTypeDetails);

        }*/


        return pokemon;

    }
}
