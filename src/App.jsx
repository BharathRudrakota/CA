import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  const [charteredAccountants, setCharteredAccountants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chartered Accountants</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              accountants={charteredAccountants}
              searchQuery={searchQuery}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/accountant/:id" element={<AccountantDetails />} />
      </Routes>
    </div>
  );
}

// HomePage component
function HomePage({ accountants, searchQuery, loading, error }) {
  const navigate = useNavigate();

  const handleAccountantClick = (id) => {
    navigate(`/accountant/${id}`);
  };

  // Filter accountants based on the search query
  const filteredAccountants = accountants.filter((accountant) =>
    accountant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (filteredAccountants.length === 0) {
    return <p>No results found for "{searchQuery}". Please try another search.</p>;
  }

  return (
    <div className="account-list">
      {filteredAccountants.map((accountant) => (
        <div
          key={accountant.id}
          className="account-card"
          onClick={() => handleAccountantClick(accountant.id)}
        >
          <img src={accountant.image} alt={accountant.name} />
          <h2>{accountant.name}</h2>
          <p>{accountant.intro}</p>
          <p>Rating: {accountant.rating} ⭐</p>
          <p>Price: {accountant.price}</p>
          <p>{accountant.deliveryTime}</p>
        </div>
      ))}
    </div>
  );
}

// AccountantDetails component
function AccountantDetails() {
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

  if (loading) {
    return <p>Loading details...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!accountant) {
    return <p>Accountant not found.</p>;
  }

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
        <strong>Testimonial:</strong> "{accountant.testimonial.text}" -{' '}
        {accountant.testimonial.author}
      </p>
    </div>
  );
}

export default App;
