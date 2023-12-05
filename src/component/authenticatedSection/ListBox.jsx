// import React from 'react';

// const Listbox = props => {

//     const clicked = e => {
//         e.preventDefault();
//         props.clicked(e.target.id);
//     }    

//     return (
//         <div className="col-sm-6 px-0">
//             <div className="list-group">
//                 {
//                     props.items.map((item, idx) => 
//                     <button key={idx}
//                         onClick={clicked}
//                         className="list-group-item list-group-item-action list-group-item-light"
//                         id={item.track.id}>
                            
//                             {item.track.name}
//                     </button>)
//                 }
//             </div>
//         </div>
        

//     );
// }

// export default Listbox;
import React from 'react';

const Listbox = (props) => {
    const clicked = (e) => {
        e.preventDefault();
        props.clicked(e.target.id);
    };

    return (
        <div className="col-sm-12 px-0 overflow-x-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-6 gap-4">
                {props.items.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={clicked}
                        className="w-full px-2 py-2"
                        id={item.track.id} // Added null check
                    >
                        {item.track && ( // Added null check
                            <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg">
                                <img
                                    src={item.track.album?.images[0]?.url} // Added null checks
                                    alt={item.track.name}
                                    className="w-full h-32 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-sm font-semibold text-gray-800">{item.track.name}</p>
                                    <p className="text-xs text-gray-500">{item.track.artists[0]?.name}</p> {/* Added null check */}
                                </div>
                            </div>
                            
                           
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Listbox;

