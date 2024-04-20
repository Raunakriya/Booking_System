import { createContext, useState,useEffect } from "react";
import axios from 'axios';


//create a context, with createContext api
export const placeContex = createContext();

const PlacesContexProvider = (props) => {

    // this state will be shared with all components 
  
    const [places, setPlaces] =useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchPlaces = async () => {
        try {
         // setLoading(true);
        
          const response = await axios.get('http://localhost:3001/getPlace');
          setPlaces(response.data);
         // setLoading(false);
          // console.log("responseee", response.data);
        } catch (error) {
          console.error('Error fetching places:', error);
         // setLoading(false);
        }
      };
  
      fetchPlaces();
    }, []);

    return (

        // this is the provider providing state
        <placeContex.Provider value={[places, setPlaces]}>
            {props.children}
        </placeContex.Provider>

    )
}

export default PlacesContexProvider;