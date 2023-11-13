package com.example.pokedatax.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
public class Result {
    private int id;
    private String name;
    private double height;
    private double weight;
    private String type;
    private List<String>stat;
    private String description;
    private String weaknesses;

    public static class ResultBuilder{
        @Override
        public String toString() {
             double max = Math.max(Math.max(name.length(),height),Math.max(type.length(),weaknesses.length()));
            String hp = build().generateAsteriks(Integer.parseInt(stat.get(0)));
            String attack = build().generateAsteriks(Integer.parseInt(stat.get(1)));
            String defense = build().generateAsteriks(Integer.parseInt(stat.get(2)));
            String special_attack = build().generateAsteriks(Integer.parseInt(stat.get(3)));
            String special_defense = build().generateAsteriks(Integer.parseInt(stat.get(4)));
            String speed = build().generateAsteriks(Integer.parseInt(stat.get(5)));
            return "Pokedex \n" +
                    build().generateGuideline(max)+
                    " \n 1.- Name: " + name +
                    " \n 2.- Height:" + height +'m'+
                    " \n 3.- Weight:" + weight +"kg"+
                    "\n 4.- Description: " + description +
                    "\n 5.- Type: " + type +
                    "\t 6.- weaknesses: " + weaknesses +
                    "\n 7.- Base point " +
                    "\n \t \t hp ->" + hp +
                    "\n \t \t attack -> " + attack +
                    "\n \t \t defense -> " + defense +
                    "\n \t \t special-attack -> " + special_attack +
                    "\n \t \t special-defense -> " + special_defense +
                    "\n \t \t speed ->" + speed+"\n"+ build().generateGuideline(max)
                    ;
        }
    }
    public String generateAsteriks(int value){
        StringBuilder asteriks= new StringBuilder();
        if(value/10 == 0){
            asteriks.append("☆");
            // Para estadisticas menores de 10 se le agrega una estrella personalizada para denotar la diferencia
        }

        for (int i = 0; i < value/10; i++) {
            asteriks.append("*");

        }
        return asteriks.toString();
    }
    public String generateGuideline(double value){
        StringBuilder guideLines = new StringBuilder();
        for (int i = 0; i < value; i++) {
            guideLines.append("-");

        }
        return guideLines.toString();
    }

}
