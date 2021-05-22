import React from 'react';

import Skeleton from "react-loading-skeleton";
import SkeletonElements from '../../frontend/SkeletonElements';
// import './skeleton.css';

const Skeletons = () => {
    return(
  
    <div className="">
    {Array(1)
        .fill()
        .map((item, index) => (
            <div className="skeleton-house" key={index} style={{marginTop:'5px'}}>
            <h2>
            <Skeleton height={36} width={`100%`} />
            </h2>
             </div>
    
           
        ))}
      </div>  
    );

}
export default Skeletons;