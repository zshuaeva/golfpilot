import React, { useState, useEffect } from 'react';
import './clubguide.css'

function ClubGuide() {
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState({ distance: '', placement: '' });

  async function fetchGolfClubs() {
    try {
      const response = await fetch('http://localhost:3000/golfclubs');
      const data = await response.json();
      setClubs(data);
    } catch (error) {
      console.error('Error fetching golf clubs:', error);
    }
  }

  useEffect(() => {
    fetchGolfClubs();
  }, []);

  return (
    <div className="clubguide-container">
      {/* <h1>Club Guide</h1> */}
      <select
        onChange={(e) => {
          const selectedClubId = e.target.value;
          const selectedClubDetails = clubs.find((club) => club._id === selectedClubId);
          setSelectedClub(selectedClubDetails);
        }}
      >
        <option value="">Select a club</option>
        {clubs.map((club) => (
          <option key={club._id} value={club._id}>
            {club.name}
          </option>
        ))}
      </select>
      <div>
        <h2>Selected Club Details</h2>
        <p>Club Name: {selectedClub.name}</p>
        <p>Median Distance: {selectedClub.distance}</p>
        <p>Ball Placement: {selectedClub.placement}</p>
      </div>
    </div>
  );
}

export default ClubGuide;
