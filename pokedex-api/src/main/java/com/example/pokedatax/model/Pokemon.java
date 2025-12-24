package com.example.pokedatax.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pokemon {
    private int id;
    private String name;
    private double height;
    private double weight;
    private String tipo1;
    private String tipo2;
    private List<Types> types;
    private List<Stats> stats;
    private List<String> debilidades;
    private String flavor_text;
    private String imagen;
    private Sprites sprites;
    private String imagenOficial;
    private double tiempo;

    @Setter
    @Getter
    public static class Types {

        private TypeDetails type;

    }

    @Getter
    @Setter
    public static class Artwork {
        public String front_default;
    }

    @Getter
    @Setter
    public static class Sprites {
        private Other other;
        private String back_default;// Este fue una prueba, trae la imagen de atras del pokemon
    }

    @Getter
    @Setter
    public static class Other {
        private dream_world dream_world;// Buscamos nuevamente en la api el objeto deseado
        private home home;
        @JsonProperty("official-artwork")
        public Artwork officialArtwork;

    }

    @Setter
    @Getter
    public static class home {
        private String front_default;
    }

    @Getter
    @Setter
    public static class dream_world {
        private String front_default;// Este es la imagen que deseamos.
    }

    @Setter
    @Getter
    public static class TypeDetails {
        private String name;
        private int id;
        private List<TypeDetails> weaknesses;

    }

    @Setter
    @Getter
    public static class Stats {
        private String key;
        private int base_stat;
        private String name;
    }


    @Setter
    @Getter
    public static class damage_relations {
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