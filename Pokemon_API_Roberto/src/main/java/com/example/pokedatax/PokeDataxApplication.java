package com.example.pokedatax;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@EnableDiscoveryClient
@SpringBootApplication
public class PokeDataxApplication {

    public static void main(String[] args) {
        double start = System.currentTimeMillis();
        double end;

        SpringApplication.run(PokeDataxApplication.class, args);
        end = System.currentTimeMillis();
        System.out.println(end - start);
    }

}
