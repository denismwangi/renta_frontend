import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/api/v1/houses';

class AllHousesService{

    getHouses(){
        return axios.get(API_URL);
    }

}
export default new  AllHousesService;