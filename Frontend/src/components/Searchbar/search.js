import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlacesContexProvider from '../Contex/PlacesProvider';
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dataArray, setdateArray] = useState([]);
    // const data = [
    //     { name: "Raunak", state: "Bihar" },
    //     { name: "Rishabh", state: "Punjab" },
    //     { name: "Riya", state: "UP" },
    //     { name: "Pawan", state: "Bihar" },
    //     { name: "Jatin", state: "Bihar" }
    // ];


    console.log(dataArray)

    const searchHandler = (e) => {
        setSearchQuery(e.target.value);

    }

    const filteredData = dataArray.filter(item =>{
        item.name.toLowerCase().includes(searchQuery.toLowerCase());
            
        setdateArray(searchQuery.toLowerCase())
    })
    
    


    return (
        <div>
            <input type='text' placeholder='Search' onChange={searchHandler} />

            {filteredData.map((item, index) => (
                // <li key={index}>
                //     {item.name}

                // </li>
                <div key={index}>
                    <img src={item.imageUrl} />
                    <p>{item.name}</p>
                </div>
            ))}

        </div>
    );
}

export default SearchBar;
