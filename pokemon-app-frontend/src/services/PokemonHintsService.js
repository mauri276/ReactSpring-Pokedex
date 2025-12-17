import axios from "axios";

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1000";

class PokemonHintsService {

    getPokemonNames() {
        return axios.get(POKE_API_URL)
            .then(res => res.data.results.map(p => p.name));
    }

}

export default new PokemonHintsService();
