"use client"
import Header from "./components/front-end/Header";
import { useState } from 'react';
import HotelSearchForm from './components/front-end/HotelSearchForm';
import HotelResults from './components/front-end/HotelResults';

export default function Home() {
  const [hotels, setHotels] = useState([]);

  const handleSearch = async ({ cityCode }) => {
    try {
      const response = await fetch(
        `api/amadeus?cityCode=${cityCode}`
      );
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  return (
    <div>
      <Header />      
      <HotelSearchForm onSearch={handleSearch} />
      <HotelResults hotels={hotels} />
    </div>
  );
}
