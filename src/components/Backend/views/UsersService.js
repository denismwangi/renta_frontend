import axios from 'axios';


const API_URL = "http://127.0.0.1:8080/api/v1/users";

class AllUsersService{

    getUsers(){
        return axios.get(API_URL);
    }
    createUser(user){
        return axios.post(API_URL, user);
    }
    getUserById(userId){
        return axios.get(API_URL + '/' +userId);
    }
    updateUser(user, userId){
        return axios.put(API_URL + '/' +userId, user);
    }
    deleteUser(userId){
        return axios.delete(API_URL + '/' + userId);
    }


}
export default new AllUsersService();