// import React from 'react';

// const Detail = ({album, artists, name}) => {

//     return (
//         <div className="offset-md-1 col-sm-4" >
//             <div className="row col-sm-12 px-0">
//                 <img 
//                     src={album.images[0].url}
//                     alt={name}>                    
//                 </img>
//             </div>
//             <div className="row col-sm-12 px-0">
//                 <label htmlFor={name} className="form-label col-sm-12">
//                     {name}
//                 </label>
//             </div>
//             <div className="row col-sm-12 px-0">
//                 <label htmlFor={artists[0].name} className="form-label col-sm-12">
//                     {artists[0].name}
//                 </label>
//             </div>
//         </div>
//     );
// }

// export default Detail;
import React from 'react';

const Detail = ({ album, artists, name }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div className="flex-shrink-0 mr-4">
                <img
                    src={album.images[0].url}
                    alt={name}
                    className="h-16 w-16 object-cover rounded-md"
                />
            </div>
            <div className="flex-1">
                <p className="text-lg font-semibold text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">{artists[0].name}</p>
            </div>
        </div>
    );
};

export default Detail;
