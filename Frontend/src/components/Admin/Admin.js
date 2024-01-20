import React, { useState, useEffect } from 'react';
import Loader from '../../Loder';

const Admin = () => {
    const [displayedBookings, setDisplayedBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAdminPanelData = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3001/getBookings`);
            const data = await response.json();
            setDisplayedBookings(data.data);
            console.log(data.data)
            setLoading(false);
        };
        fetchAdminPanelData();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <Loader w={300} />
            </div>
        )
    }

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Booking Details:</h3>
            <table className="w-full border-collapse border border-gray-300 font-bold">
                <thead>
                    <tr className="bg-gray-200 text-yellow-700 font-extrabold">
                        <th className="border border-gray-300 px-4 py-2">SlotId</th>
                        <th className="border border-gray-300 px-4 py-2">Place</th>
                        <th className="border border-gray-300 px-4 py-2">Total Price</th>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedBookings?.map((booking, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 text-center">{booking.slotId}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{booking.name}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">${booking.cost}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{booking.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
