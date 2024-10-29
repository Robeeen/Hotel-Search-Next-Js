import Amadeus from 'amadeus';

const amadeus = new Amadeus({
  clientId: 'fP7w4AkhOs8ijJnCGGx5n0Gjf7EROTEr',
  clientSecret: 'eifHBfytod2man4C',
});

// (async () => {
//   try {
//     const response = await amadeus.shopping.hotelOffers.post({
//       cityCode: 'DAC',
//       checkInDate: '2024-10-30',
//       checkOutDate: '2024-10-31',
//     });
//     console.log('Amadeus response:', response.data);
//   } catch (error) {
//     console.error('Amadeus API Error:', error.response?.data || error.message);
//   }
// })();

// (async () => {
//   try {
//     const response = await amadeus.referenceData.locations.get({
//       keyword: 'Paris',
//       subType: Amadeus.location.city,
//     });
//     console.log('Amadeus response:', response.data);
//   } catch (error) {
//     console.error('Amadeus API Error:', error.response?.data || error.message);
//   }
// })();

export default async function handler(req, res) {
  try {
    const { cityCode } = req.query;

    // Verify if parameters are available
    if (!cityCode ) {
      return res.status(400).json({ error: "Missing required parameters." });
    }

    const response = await amadeus.referenceData.locations.get({
      cityCode,
      subType: Amadeus.location.city,
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Amadeus API Error:', error.response?.data || error.message); // Log the full error response if available
    res.status(500).json({ error: error.response?.data || error.message });
  }
}

