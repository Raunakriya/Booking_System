// DummyDetailComponent.jsx

import React from 'react';

const DummyDetail = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Mumbai Taj Hotel</h1>
      <img
        src="https://st.depositphotos.com/3226333/4643/i/450/depositphotos_46433651-stock-photo-interior-of-classic-building.jpg"
        alt="Taj Mumbai"
        className="w-full h-64 object-cover mb-4 rounded-md"
      />
      <p className="text-gray-700 mb-4">
        The Mumbai Taj Hotel is an iconic luxury hotel located in the heart of
        Mumbai, India. With its stunning architecture and world-class amenities,
        it has been a symbol of hospitality and excellence for decades.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <p className="text-gray-700">Colaba, Mumbai, India</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Rating</h2>
          <p className="text-gray-700">5/5 stars</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Facilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Luxurious rooms and suites</li>
          <li>Multiple fine dining restaurants</li>
          <li>Swimming pool and spa</li>
          <li>Conference and event spaces</li>
          {/* Add more facilities as needed */}
        </ul>
      </div>
    </div>
  );
};

export default DummyDetail;
