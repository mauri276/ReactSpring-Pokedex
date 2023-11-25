package com.example.pokedatax;

import com.example.pokedatax.client.PokemonClientApi;
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
        double start= System.currentTimeMillis();
        double end;

        SpringApplication.run(PokeDataxApplication.class, args);
        end = System.currentTimeMillis();
        System.out.println(end-start);
    }


}
