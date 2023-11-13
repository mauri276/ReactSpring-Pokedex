package com.example.pokedatax.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Builder
@Getter
@Setter
public class TypeDetails {
    private String name;
    private int id;
    private damage_relations damage_relations;
   @Setter
   @Getter
    public static class damage_relations{
        private List <double_damage_from> double_damage_from;
    }
    @Setter
    @Getter
    public static class double_damage_from {
        private String name;
        private int id;
    }

}
