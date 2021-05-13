import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080/api/v1/houses';
//const API_URL = 'https://rentaapi.herokuapp.com/api/v1/houses'; 

class AllHousesService{

    getHouses(){
        return axios.get(API_URL);
    }
    getHouseById(houseId){
        return axios.get(API_URL + '/' +houseId);
    }
    // createHouse(){
    //     return axios.post(API_URL + '/' +create);
    // }

}
export default new  AllHousesService;