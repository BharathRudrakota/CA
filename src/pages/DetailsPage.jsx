import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css'; // Import the CSS file for styling

function DetailsPage() {
  const { id } = useParams();
  const [accountant, setAccountant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccountantData = async () => {
      try {
        const response = await fetch('/db.json'); // Fetch the data
        const data = await response.json();

        // Find the specific accountant based on the ID
        if (data && data.charteredAccountants) {
          const selectedAccountant = data.charteredAccountants.find(accountant => accountant.id === parseInt(id));
          setAccountant(selectedAccountant);
        } else {
          console.error('charteredAccountants not found in db.json');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountantData();
  }, [id]);

  if (loading) {
    return <div className="details-container">Loading...</div>;
  }

  if (!accountant) {
    return <div className="details-container">Accountant not found.</div>;
  }

  return (
    <div className="details-container">
      <div className="details-content">
        <h1>{accountant.name}</h1>
        <img className="accountant-image" src={accountant.image} alt={accountant.name} />
        <p className="intro-text">{accountant.intro}</p>
        <p className="price"><strong>Price: {accountant.price}</strong></p>
        <p className="delivery-time"><strong>Delivery Time: {accountant.deliveryTime}</strong></p>
      </div>
    </div>
  );
}

export default DetailsPage;
