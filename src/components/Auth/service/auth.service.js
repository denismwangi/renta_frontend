import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

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
    register(firstname, lastname,username, email,phone,  password ){
        return axios.post(API_URL + "signup", {
            firstname,
            lastname,
            username,
            email,
            phone,
            password
          
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