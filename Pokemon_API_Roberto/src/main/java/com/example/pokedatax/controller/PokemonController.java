package com.example.pokedatax.controller;

import com.example.pokedatax.client.PokemonClientApi;
import com.example.pokedatax.model.Pokemon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class PokemonController {


    @Autowired
    private PokemonClientApi pokemonClientApi;
    @GetMapping("/pokemon/{name}")
    public Pokemon getPokemonByName(@PathVariable String name) {

        return pokemonClientApi.getDataPokemon(name);
    }
}
