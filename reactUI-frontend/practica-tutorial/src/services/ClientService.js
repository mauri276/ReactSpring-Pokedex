import axios from "axios";

const CLIENT_BASE_REST_API_URL = "http://localhost:8080/api/pokemon/";

class ClientService {
    
    getPokemon(nombre){
        return axios.get(CLIENT_BASE_REST_API_URL + nombre);
    }

}

export default new ClientService();