import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const CharteredAccountants = () => {
  const [charteredAccountants, setCharteredAccountants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCharteredAccountants(data.charteredAccountants);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredAccountants = charteredAccountants.filter((accountant) =>
    accountant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="message">Loading data...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="accountants-page">
      <h1 className="text-center">Find Your Chartered Accountant</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="account-list">
        {filteredAccountants.length === 0 ? (
          <p className="message">No results found for "{searchQuery}".</p>
        ) : (
          filteredAccountants.map((accountant) => (
            <div
              key={accountant.id}
              className="account-card"
              onClick={() => navigate(`/accountant/${accountant.id}`)}
            >
              <img src={accountant.image} alt={accountant.name} />
              <h2>{accountant.name}</h2>
              <p>{accountant.intro}</p>
              <p>Rating: {accountant.rating} ⭐</p>
              <p>Price: {accountant.price}</p>
              <p>{accountant.deliveryTime}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CharteredAccountants;