package com.example.pokedatax.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Setter
@Getter
public class Pokemon {
    private int id;
    private String name;
    private double height;
    private double weight;
    private List<Types> types;
    private List<Stats> stats;
    private List<TypeDetails> weaknesses;
    private List<damage_relations> doubledamage;
    private List<Description> description;
    private String flavor_text;
    @Setter
    @Getter
    public static class Types{

        private TypeDetails type;

    }


    @Setter
    @Getter
    public static class TypeDetails{
        private String name;
        private int id;
        private List<TypeDetails> weaknesses;

    }
    @Setter
    @Getter
    public static class Stats{
        private String base_stat;
        private String name;
        private String url;
    }
    @Setter
    @Getter
    public static class damage_relations{
        private List<String> double_damage_from;
    }
    @Builder
    @Getter
    public static class Description {
        private String flavorText;
        private String name;
        private String version;
    }


}
//https://pokeapi.co/api/v2/pokemon-species/257