package com.example.pokedatax.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class TypeDetail {
    private String name;
    private String url;
}
