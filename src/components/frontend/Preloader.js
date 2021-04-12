import React from 'react';
import ReactLoading from 'react-loading';

const Preloader = ({type, color}) => {

    
    return (
        <div>
             <ReactLoading type={"bars"} color={"#00E676"} height={'5%'} width={'5%'} />
        </div>
    );
}

export default Preloader;
