import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/api/v1/houses';

class AllHousesService{

    getHouses(){
        return axios.get(API_URL);
    }
    getHouseById(houseId){
        return axios.get(API_URL + '/' +houseId);
    }

}
export default new  AllHousesService;