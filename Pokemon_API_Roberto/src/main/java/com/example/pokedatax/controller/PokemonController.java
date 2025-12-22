package com.example.pokedatax.controller;

import com.example.pokedatax.client.PokemonClientApi;
import com.example.pokedatax.model.Pokemon;
import com.example.pokedatax.model.PokemonDescription;
import com.example.pokedatax.model.TypeDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PokemonController {

    @Autowired
    private PokemonClientApi pokemonClientApi;

    @GetMapping("/pokemon/{name}")
    public Pokemon getPokemonByName(
            @PathVariable String name,
            @RequestParam(defaultValue = "es") String lang
    ) {
        try {
            long startTime = System.currentTimeMillis();

            Pokemon pokemon = pokemonClientApi.getDataPokemon(name);
            PokemonDescription description = pokemonClientApi.getPokemonDescription(name);

            for (PokemonDescription.flavor_text_entries entry : description.getFlavor_text_entries()) {
                if (entry.getLanguage().getName().equals(lang)) {
                    pokemon.setFlavor_text(entry.getFlavor_text());
                    break;
                }
            }

            List<String> weaknesses = new ArrayList<>();
            for (Pokemon.Types type : pokemon.getTypes()) {
                TypeDetails typeDetails = pokemonClientApi.getTypeDetails(type.getType().getName());
                typeDetails.getDamage_relations().getDouble_damage_from()
                        .forEach(d -> weaknesses.add(d.getName()));
            }
            pokemon.setDebilidades(weaknesses);

            pokemon.setTipo1(pokemon.getTypes().get(0).getType().getName());
            if (pokemon.getTypes().size() > 1) {
                pokemon.setTipo2(pokemon.getTypes().get(1).getType().getName());
            }

            pokemon.setImagen(pokemon.getSprites().getOther().getDream_world().getFront_default());
            pokemon.setImagenOficial(pokemon.getSprites().getOther().getOfficialArtwork().getFront_default());

            String[] statKeys = {"hp", "attack", "defense", "special-attack", "special-defense", "speed"};

            for (int i = 0; i < pokemon.getStats().size(); i++) {
                Pokemon.Stats stat = pokemon.getStats().get(i);
                stat.setKey(statKeys[i]);
            }

            long endTime = System.currentTimeMillis();
            pokemon.setTiempo(endTime - startTime);

            return pokemon;

        } catch (Exception e) {
            System.out.println("Error obteniendo Pokémon: " + e.getMessage());
            return null;
        }
    }
}
