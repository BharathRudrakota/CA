import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function HomePage() {
  const [accountants, setAccountants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAccountants = async () => {
      try {
        const response = await fetch('/db.json');
        const data = await response.json();
        setAccountants(data.charteredAccountants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAccountants();
  }, []);

  // Filter accountants based on the search query
  const filteredAccountants = accountants.filter((accountant) =>
    accountant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container">
      <h1>Accountants</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {filteredAccountants.length === 0 ? (
        <p>No results found for "{searchQuery}"</p>
      ) : (
        <div className="accountants-list">
          {filteredAccountants.map((accountant) => (
            <div key={accountant.id} className="account-card">
              <img src={accountant.image} alt={accountant.name} />
              <div>
                <h2>{accountant.name}</h2>
                <p>{accountant.intro}</p>
                <p className="rating">Rating: {accountant.rating} ⭐</p>
                <p className="price">Price: {accountant.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Chartered Accountants. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a>
        </div>
      </footer>
    </section>
  );
}

export default HomePage;
