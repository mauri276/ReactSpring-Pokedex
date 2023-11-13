package com.example.pokedatax.controller;

import com.example.pokedatax.client.PokemonClientApi;
import com.example.pokedatax.model.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class GenerateData {
    private Pokemon pokemon;

    private PokemonClientApi pokemonClientApi;

    public GenerateData(Pokemon pokemon, PokemonClientApi pokemonClientApi) {
        this.pokemon = pokemon;
        this.pokemonClientApi = pokemonClientApi;
    }
    public Optional<Result> getInformation(){
        if (pokemon != null){
            Result.ResultBuilder resultBuilder = Result.builder();
            resultBuilder.name(pokemon.getName());
            double height = pokemon.getHeight()/10;

            resultBuilder.height(height);
            double weight = pokemon.getWeight()/10;
            resultBuilder.weight(weight);
            List<String> types = pokemon.getTypes()
                    .stream()
                    .map(Pokemon.Types::getType)
                    .map(Pokemon.TypeDetails::getName)
                    .collect(Collectors.toList());

            String typesAsString = String.join(", ", types);
            resultBuilder.type(typesAsString);

            List<PokemonDescription> desc = new ArrayList<>();
            desc.add(pokemonClientApi.getPokemonDescription(pokemon.getName()));
            StringBuilder descriptionStr = new StringBuilder();
            for (int i = 0; i < desc.get(0).getFlavor_text_entries().size(); i++) {
                if(desc.get(0).getFlavor_text_entries().get(i).getLanguage().getName().equals("fr")){
                    String description = desc.get(0).getFlavor_text_entries().get(i).getFlavor_text();
                    descriptionStr.append(description);
                    break;
                }
            }

            resultBuilder.description(descriptionStr.toString());




            List<String> stats = pokemon.getStats().stream().map(Pokemon.Stats::getBase_stat).collect(Collectors.toList());
            resultBuilder.stat(stats);

            List<TypeDetails>typesDetail = new ArrayList<>();

            List<String> typesAsList = new ArrayList<>(Arrays.asList(typesAsString.split(",")));
            typesDetail.add(pokemonClientApi.getTypeDetails(typesAsList.get(0)));


            List<String> typesWeek = new ArrayList<>();
            StringBuilder weaknesses = new StringBuilder();

            for (int i = 0; i < typesDetail.get(0).getDamage_relations().getDouble_damage_from().size(); i++) {
                weaknesses.append(typesDetail.get(0).getDamage_relations().
                        getDouble_damage_from().
                        get(i).getName()).append(" ");
            }
            if(typesAsList.size()>1){
                typesDetail.add(pokemonClientApi.getTypeDetails(typesAsList.get(1).replace(" ","")));
                for (int i = 0; i < typesDetail.get(1).getDamage_relations().getDouble_damage_from().size(); i++) {
                    weaknesses.append(typesDetail.get(1).getDamage_relations().
                            getDouble_damage_from().
                            get(i).getName()).append(" ");
                }
            }
            resultBuilder.weaknesses(weaknesses.toString());
            System.out.println(resultBuilder);
            System.out.println();
            return Optional.of(resultBuilder.build());

        }
        return Optional.empty();

    }
}
