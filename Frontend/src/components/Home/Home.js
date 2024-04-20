// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import { Link } from 'react-router-dom';
// import Loader from '../../Loder';
// import { useContext } from 'react';
// import PlacesContexProvider from '../Contex/PlacesProvider';

// const Home = () => {
//   const [places, setPlaces] =useContext(PlacesContexProvider);




//   // if (loading) {
//   //   return (
//   //     <div className='flex justify-center items-center'>
//   //       <Loader w={300} />
//   //     </div>
//   //   )
//   // }

//   return (
//     <div className="container mx-auto my-8">
//       <h1 className="text-3xl text-center font-bold mb-6">Based on your search in pairs</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//         {places.map((place) => (
//           <Link to={`/places/${place._id}`}>
//             <div className="p-3 rounded-lg shadow-2xl bg-slate-900" key={place._id}>
//               <img src={place.imageUrl} alt={place.name} className="w-full h-48 object-cover mb-4 rounded-md" />
//               <Link to={`/places/${place._id}`} className="text-yellow-500 font-extrabold text-center hover:underline block">
//                 {place.name}
//               </Link>
//               <p className="text-gray-600 mt-2 text-center">
//                 <StarRating rating={place.review} />
//                 {/* {console.log(place.review)} */}
//               </p>
//               <p className="text-stone-100 font-bold text-center my-3">From: ${place.cost}__per person</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const Home = ({ searchTerm }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/getPlace');
        setPlaces(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching places:', error);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl text-center font-bold mb-6">Based on your search in pairs</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          Loading...
        </div>
      ) : filteredPlaces.length === 0 ? (
        <div className="text-center">No results found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
          <Link to={`/places/${place._id}`}>
            <div className="p-3 rounded-lg shadow-2xl bg-slate-900" key={place._id}>
              <img src={place.imageUrl} alt={place.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <Link to={`/places/${place._id}`} className="text-yellow-500 font-extrabold text-center hover:underline block">
                {place.name}
              </Link>
              <p className="text-gray-600 mt-2 text-center">
                <StarRating rating={place.review} />
                {/* {console.log(place.review)} */}
              </p>
              <p className="text-stone-100 font-bold text-center my-3">From: ${place.cost}__per person</p>
            </div>
          </Link>
        ))}
        </div>
      )}
    </div>
  );
};

export default Home;
