import React from 'react';
import SkeletonElements from './SkeletonElements';
import Skeleton from "react-loading-skeleton";
import './skeleton.css';

const HouuseSkeletons = () => {
    return(
    // <div className="skeleton-wrapper">
    //     <div className="skeleton-house">
    //         <div className="skeleton-profile">
    //             <div>
    //             <SkeletonElements type="avatar"  />
    //             </div>
    //         <div>
    //         <SkeletonElements type="title"/>
    //         <SkeletonElements type="title"/>
    //         </div>
    //         </div>
        
    //         <SkeletonElements type="thumbnail"  />
    //         <SkeletonElements type="title"/>
    //         <SkeletonElements type="title"/>
    //         <SkeletonElements type="title"/>
    //         <SkeletonElements type="title"/>
           

    //     </div>

    // </div>
    <div className="skeleton-wrapper">
    {Array(5)
        .fill()
        .map((item, index) => (
            <div className="skeleton-house" key={index} style={{marginTop:'30px'}}>
             <div className="skeleton-profile" style={{display:'grid', gridTemplateColumns:'1fr 4fr',gap:'10px', alignItems:'center'}}>
                 <div>
                 <Skeleton circle={true} height={80} width={80} />
                 </div>
                 <div>
                 <Skeleton height={36} width={`40%`} />
                
                     </div>
             </div>
             <div style={{marginTop:'10px'}}>
             <Skeleton height={300} width={`100%`} color={'red'}/>
             <div style={{marginTop:'10px'}}>
             <Skeleton width={`60%`}/>
             </div>
             <div style={{marginTop:'10px'}}>
             <Skeleton width={`60%`} />
             </div>
             <div style={{marginTop:'10px'}}>
             <Skeleton width={`70%`} height={36} />
             </div>
             </div>
             
          </div>
        ))}
      </div>  
    );

}
export default HouuseSkeletons;