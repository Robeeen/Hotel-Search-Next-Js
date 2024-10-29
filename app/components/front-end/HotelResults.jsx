'use-client'

// components/HotelResults.js
export default function HotelResults({ hotels }) {
    return (
      <div>
        {hotels && hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.hotel.hotelId}>
              <h3>{hotel.hotel.name}</h3>
              <p>Address: {hotel.hotel.address.lines.join(', ')}</p>
              <p>Rating: {hotel.hotel.rating}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  }
  