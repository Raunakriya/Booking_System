import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DummyDetail from '../DummyDetail';
import Loader from '../../Loder';

const SinglePlace = () => {
    const { id } = useParams();
    const [singlePlaceData, setSinglePlaceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [personCount, setPersonCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (singlePlaceData) {
            const totalPrice = singlePlaceData.cost * personCount;
            setTotalPrice(totalPrice);
        }
    }, [personCount, singlePlaceData]);

    useEffect(() => {
        const fetchSinglePlaceData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/getPlace/${id}`);
                const data = await response.json();
                setSinglePlaceData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching place data:', error);
                setLoading(false);
            }
        };
        fetchSinglePlaceData();
    }, [id]);

    const handlePersonCountChange = (newCount) => {
        setPersonCount(Math.max(1, newCount));
    };

  

    const handleBookNow = async () => {
        const selectedDate = document.getElementById('date').value;
        if (!selectedDate) {
            alert('Please select a valid date.');
            return;
        }
        const newBooking = {
            date: selectedDate,
            personCount,
            totalPrice,
            placeName: singlePlaceData.name,
        };
        try {
            const response = await fetch('http://localhost:3001/saveBooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBooking),
            });

            if (!response.ok) {
                throw new Error('Error saving booking.');
            }
            // Update the bookings state only if the request is successful
            setPersonCount(1);
            setTotalPrice(0);
            alert('Booking confirmed!');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving the booking.');
        }
    };



    return (
        <div className="container mx-auto my-8 max-w-2xl">
            {loading && <div className='flex justify-center items-center'>
                <Loader w={300} />
            </div>}
            {singlePlaceData && (
                <div>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mt-4 text-slate-800">{singlePlaceData.name}</h2>
                        <p className="text-red-500 mt-2 font-extrabold">
                            Rating: {singlePlaceData.review} <span role="img" aria-label="star">⭐</span>
                        </p>
                        <p className="text-yellow-800 text-right font-extrabold">Cost: ${singlePlaceData.cost} per person</p>
                        <img
                            src={singlePlaceData.imageUrl}
                            alt={singlePlaceData.name}
                            className="w-full h-72 object-cover rounded-md"
                        />
                    </div>

                    <div className="mb-5 bg-slate-900 p-4 rounded-xl text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-4">
                                <label htmlFor="date" className="text-xl font-bold">Select Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="px-4 py-2 border border-gray-200 text-slate-900 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <label htmlFor="personCount" className="text-xl font-bold">Select Number of Persons:</label>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => handlePersonCountChange(personCount - 1)}
                                        className="bg-gray-200 px-4 py-2 rounded-l text-slate-900 font-extrabold"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-t border-b border-gray-200">{personCount}</span>
                                    <button
                                        onClick={() => handlePersonCountChange(personCount + 1)}
                                        className="bg-gray-200 px-4 py-2 rounded-r text-slate-900 font-extrabold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 bg-slate-900 p-4 rounded-xl text-white flex flex-row gap-4 justify-around items-center">
                        <div className="font-bold">
                            <p>Person: <span className="text-yellow-500">{personCount}</span></p>
                            <p>Price per Person: <span className="text-yellow-500">${singlePlaceData.cost}</span></p>
                            <p>Total: <span className="text-yellow-500">${totalPrice}</span></p>
                        </div>
                        <button
                            onClick={handleBookNow}
                            className="bg-yellow-600 text-white font-extrabold rounded-md px-5 h-12"
                        >
                            Book now
                        </button>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-2">Place Details:</h3>
                        <DummyDetail />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePlace;
