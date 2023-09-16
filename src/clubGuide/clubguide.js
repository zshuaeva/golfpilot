import React, { useState } from 'react';
import './clubguide.css'
import All from './All.png'
import Driver from './Driver.png'
import Long from './Long.png'
import Mid from './Mid.png'
import Short from './Short.png'

function ClubGuide() {

  const tempClubs = [
    {
      name: 'All',
      distance: '60 yds - 220 yds',
      position: All
    },
    {
    name: 'Driver',
    distance: '220 yds',
    position: Driver
  },
  {
    name: '2 Wood',
    distance: '215 yds',
    position: Long
  },
  {
    name: '3 Wood',
    distance: '210 yds',
    position: Long
  },
  {
    name: '4 Wood',
    distance: '205 yds',
    position: Long
  },
  {
    name: '2 Iron',
    distance: '180 yds',
    position: Long
  },
  {
    name: '3 Iron',
    distance: '170 yds',
    position: Long
  },
  {
    name: '4 Iron',
    distance: '160 yds',
    position: Long
  },
  {
    name: '5 Iron',
    distance: '155 yds',
    position: Mid
  },
  {
    name: '6 Iron',
    distance: '145 yds',
    position: Mid
  },
  {
    name: '7 Iron',
    distance: '140 yds',
    position: Mid
  },
  {
    name: '8 Iron',
    distance: '130 yds',
    position: Short
  },
  {
    name: '9 Iron',
    distance: '115 yds',
    position: Short
  },
  {
    name: 'Pitching W',
    distance: '100 yds',
    position: Short
  },
  {
    name: 'Gap W',
    distance: '90 yds',
    position: Short
  },
  {
    name: 'Sand W',
    distance: '80 yds',
    position: Short
  },
  {
    name: 'Lob W',
    distance: '60 yds',
    position: Short
  },

]
  // async function fetchGolfClubs() {
  //   try {
  //     const response = await fetch('http://localhost:3000/golfclubs');
  //     const data = await response.json();
  //     setClubs(data);
  //   } catch (error) {
  //     console.error('Error fetching golf clubs:', error);
  //   }
  // }

  // useEffect(() => {
  //   fetchGolfClubs();
  // }, []);
  const [selectedClub, setSelectedClub] = useState({ name: '', distance: '' });

  return (
    <div className="clubguide-container">
      <h1>Club Guide</h1>
      <select
        onChange={(e) => {
          const selectedClubName = e.target.value;
          const selectedClubDetails = tempClubs.find((club) => club.name === selectedClubName);
          setSelectedClub(selectedClubDetails || { name: '', distance: '' });
        }}
      >
        <option value="">Select a club</option>
        {tempClubs.map((club) => (
          <option key={club.name} value={club.name}>
            {club.name}
          </option>
        ))}
      </select>
      <div>
        <h2>Selected Club Details</h2>
        <p>Club Name: {selectedClub.name}</p>
        <p>Median Distance: {selectedClub.distance}</p>
        <p>Ball Placement:</p>
        <img src={selectedClub.position} alt="Foot Position" className="BallPlacementImg" />
      </div>
    </div>
  );
}

export default ClubGuide;
