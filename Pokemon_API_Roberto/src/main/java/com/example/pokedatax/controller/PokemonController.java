package com.example.pokedatax.controller;

import com.example.pokedatax.client.PokemonClientApi;
import com.example.pokedatax.model.Pokemon;
import com.example.pokedatax.model.PokemonDescription;
import com.example.pokedatax.model.TypeDetail;
import com.example.pokedatax.model.TypeDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
        //Creamos una lista de string que contendra las debilidades
        List<String> weaknesses = new ArrayList<>();
        //Listamos los tipos
        List<Pokemon.Types> types = pokemon.getTypes();
        //Iteramos por cada tipo
        for (Pokemon.Types type : types) {
            //Sacamos el nombre del tipo
            String typeName = type.getType().getName();
            //Consultamos la api para sacar las relaciones de daño
            TypeDetails typeDetails = pokemonClientApi.getTypeDetails(typeName);
            List<TypeDetails.double_damage_from> doubleDamageFrom = typeDetails.getDamage_relations().getDouble_damage_from();
            //Añadimos los nombres de las debilidades en la lista antes creada
            for (TypeDetails.double_damage_from weakness : doubleDamageFrom) {
                weaknesses.add(weakness.getName());
            }
        }
        pokemon.setDebilidades(weaknesses);


        //Al string imagen, le buscamos por la parte del sprite hasta llegar al a imagen que necesitamos.
        pokemon.setImagen(pokemon.getSprites().getOther().getDream_world().getFront_default());


        pokemon.getStats().get(0).setName("Vida");
        pokemon.getStats().get(1).setName("Ataque");
        pokemon.getStats().get(2).setName("Defensa");
        pokemon.getStats().get(3).setName("Ataque especial");
        pokemon.getStats().get(4).setName("Defensa especial");
        pokemon.getStats().get(5).setName("Velocidad");






        return pokemon;

    }
}
