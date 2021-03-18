import React from 'react';

function authHeader() {
    
    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.accessToken){
         return{Authorization: 'Bearer' + user.accessToken };
       // return{ 'x-accessToken': + user.accessToken}; //for node & express
    }else{
        return {};
    }
}
export default  authHeader;