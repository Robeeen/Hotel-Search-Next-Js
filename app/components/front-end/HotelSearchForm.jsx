'use-client'

// components/HotelSearchForm.js
import { useState } from 'react';

export default function HotelSearchForm({ onSearch }) {
  const [cityCode, setCityCode] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ cityCode, checkInDate, checkOutDate });
  };

  return (
    <>
    <div className='text-center items-center my-8'>
    <form onSubmit={handleSubmit} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 max-auto mt-10 border border-black'>
      <input
        type="text"
        placeholder="City Code (e.g., PAR)"
        value={cityCode}
        onChange={(e) => setCityCode(e.target.value)} className='pl-4 outline-none'
      />
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
      <button type="submit">Search Hotels</button>
    </form>
    </div>   
    </>    
  );
}
