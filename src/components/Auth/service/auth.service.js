import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {

    login(username, password){

        return axios.post(API_URL + "signin",{

            username,
            password
        })
        .then(response => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
          });
      }
    register(firstname, lastname,username, email,  password, contacts){
        return axios.post(API_URL + "signup", {
            firstname,
            lastname,
            username,
            email,
            password,
            contacts
        })
        .then(response =>{
            if(response.data.accessToken){

                localStorage.setItem("user", JSON.stringify(response.data));

            }

            return response.data;
            
        })
    }
    
    logout(){
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }

}
export default new AuthService();