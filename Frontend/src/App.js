// import { useState } from 'react';
// import './App.css';
// import Admin from './components/Admin/Admin';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import SinglePlace from './components/SinglePlace/SinglePlace';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import SearchBar from './components/Searchbar/search';
// import PlacesContexProvider from './components/Contex/PlacesProvider';



// function App() {


//   return (
//     <Router>
//       <PlacesContexProvider>
//         <Header />
//         <Routes>


//           <Route path="/" element={<Home />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/places/:id" element={<SinglePlace />} />
//           <Route path="/search" element={<SearchBar />} />


//         </Routes>
//       </PlacesContexProvider>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Header from './components/Header/Header';
 import Home from './components/Home/Home';
 import Admin from './components/Admin/Admin';
import SinglePlace from './components/SinglePlace/SinglePlace';
import Login from './components/Auth/Login';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Header setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/places/:id" element={<SinglePlace />} />
         <Route path='/login'element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
