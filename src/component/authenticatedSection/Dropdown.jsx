import React from 'react';

const Dropdown = props => {    

    const dropdownChanged = e => {
        props.changed(e.target.value);

    }    

    return (
        
        <div className="relative inline-block w-full text-white">
    <label className="block  font-medium text-lg ">{props.label}</label>
    <select
        value={props.selectedValue}
        onChange={dropdownChanged}
        className="block h-12 w-full px-4 py-2 mt-1 text-sm border border-gray-300 bg-gradient-to-l from-gray-500 via-gray-800 to-zinc-900 rounded-md focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200"
    >
        <option key={0} className="text-black">Select Genre...</option>
        {props.options.map((item, idx) => (
            <option key={idx + 1} value={item.id} className="bg-black text-white h-24">
                {item.name}
            </option>
        ))}
    </select>
   
</div>

    );
}

export default Dropdown;