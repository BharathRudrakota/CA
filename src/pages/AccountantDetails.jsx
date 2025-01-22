import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AccountantDetails = () => {
  const { id } = useParams();
  const [accountant, setAccountant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountantDetails = async () => {
      try {
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const selectedAccountant = data.charteredAccountants.find(
          (acc) => acc.id === parseInt(id)
        );
        setAccountant(selectedAccountant);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch accountant details. Please try again later.');
        setLoading(false);
      }
    };

    fetchAccountantDetails();
  }, [id]);

  if (loading) return <p className="message">Loading details...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!accountant) return <p className="message">Accountant not found.</p>;

  return (
    <div className="account-details">
      <h2>{accountant.name}</h2>
      <img src={accountant.image} alt={accountant.name} />
      <p>{accountant.intro}</p>
      <p>
        <strong>Rating:</strong> {accountant.rating} ⭐
      </p>
      <p>
        <strong>Price:</strong> {accountant.price}
      </p>
      <p>
        <strong>Delivery Time:</strong> {accountant.deliveryTime}
      </p>
      <p>
        <strong>About:</strong> {accountant.about.description}
      </p>
      <p>
        <strong>Testimonial:</strong> "{accountant.testimonial.text}" - {accountant.testimonial.author}
      </p>
    </div>
  );
};

export default AccountantDetails;