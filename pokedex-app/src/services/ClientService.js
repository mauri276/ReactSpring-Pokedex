import axios from "axios";

const CLIENT_BASE_REST_API_URL = "/api";

class ClientService {
    getPokemon(nombre, lang = "es") {
        return axios.get(`${CLIENT_BASE_REST_API_URL}/pokemon/${nombre}`, {
            params: { lang }
        });
    }
}

export default new ClientService();
