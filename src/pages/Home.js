import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import UserCard from '../components/UserCard';
import Header from '../components/Header';

const Home = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError('Unable to fetch data. Please try again.');
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (cityFilter === '' || user.address.city.toLowerCase() === cityFilter.toLowerCase())
  );

  const uniqueCities = [...new Set(users.map(user => user.address.city))];

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <Header/>
      
      <div style={{maxWidth:'80%',margin:'auto'}}>
        <div className="search-filter-container">
          <input 
            type="text" 
            placeholder="Search by name" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <select 
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="city-select"
          >
            <option value="">All Cities</option>
            {uniqueCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="user-grid">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
      <div style={{marginTop:20,height:1}}></div>
    </div>
  )
}

export default Home