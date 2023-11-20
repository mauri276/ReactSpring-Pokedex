package com.example.pokedatax;

import com.example.pokedatax.client.PokemonClientApi;
import com.example.pokedatax.controller.GenerateData;
import com.example.pokedatax.model.Pokemon;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@EnableFeignClients
@EnableDiscoveryClient
@SpringBootApplication
public class PokeDataxApplication {

    public static void main(String[] args) {
        SpringApplication.run(PokeDataxApplication.class, args);
    }
    @Bean
    public CommandLineRunner run (PokemonClientApi pokemonClientApi){
        return args -> {
            Pokemon pokemon = pokemonClientApi.getDataPokemon("snorlax");
            GenerateData data = new GenerateData(pokemon,pokemonClientApi);
            data.getInformation();
        };
    }

}
