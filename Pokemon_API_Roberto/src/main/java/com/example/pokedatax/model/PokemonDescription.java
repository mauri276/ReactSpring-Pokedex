package com.example.pokedatax.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class PokemonDescription {

    private List<flavor_text_entries> flavor_text_entries;
    private String name;
    private String version;
    private String capture_rate;
    private Color color;
    @Getter
    @Setter
    public static class Color{
        private String name;
    }
    @Getter
    @Setter
    public static class flavor_text_entries
    {
        private String flavor_text;
        private language language;

    }
    @Getter
    @Setter
    public static class language{
        private String name;
    }


}

