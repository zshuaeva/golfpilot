import React, { useState, useEffect } from 'react';
import './scorecard.css';

const Scorecard = () => {
  const [courseName, setCourseName] = useState('');
  const [holeDetails, setHoleDetails] = useState(() => {
    const savedHoleDetails = JSON.parse(localStorage.getItem('holeDetails')) || [
      { holeNumber: 1, par: 0, score: 0 },
    ];
    return savedHoleDetails;
  });

  useEffect(() => {
    const savedCourseName = localStorage.getItem('courseName');
    if (savedCourseName) {
      setCourseName(savedCourseName);
    }
  }, []);

  const calculateTotalScore = () => {
    let totalScore = 0;
    for (const hole of holeDetails) {
      totalScore += hole.score;
    }
    return totalScore;
  };

  const calculateTotalPar = () => {
    let totalPar = 0;
    for (const hole of holeDetails) {
      totalPar += hole.par;
    }
    return totalPar;
  };

  const handleParChange = (e, index) => {
    const updatedHoleDetails = [...holeDetails];
    updatedHoleDetails[index].par = parseInt(e.target.value);
    setHoleDetails(updatedHoleDetails);

    localStorage.setItem('holeDetails', JSON.stringify(updatedHoleDetails));
  };

  const handleScoreChange = (e, index) => {
    const updatedHoleDetails = [...holeDetails];
    updatedHoleDetails[index].score = parseInt(e.target.value);
    setHoleDetails(updatedHoleDetails);


    localStorage.setItem('holeDetails', JSON.stringify(updatedHoleDetails));
  };

  const addNewLine = () => {
    setHoleDetails([...holeDetails, { holeNumber: holeDetails.length + 1, par: 0, score: 0 }]);
  };

  const handleCourseNameChange = (e) => {
    const newCourseName = e.target.value;
    setCourseName(newCourseName);

    localStorage.setItem('courseName', newCourseName);
  };

  return (
    <div>
      <h1 className='title'>Golf Scorecard</h1>
      <label htmlFor="courseName" className='course-name'>Course Name:</label>
      <input
        type="text"
        id="courseName"
        value={courseName}
        onChange={handleCourseNameChange}
      />
      <table className='tables-container'>
        <thead className='tables-head'>
          <tr>
            <th>Hole</th>
            <th>Par</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody className='tables-body'>
          {holeDetails.map((hole, index) => (
            <tr key={index}>
              <td>{hole.holeNumber}</td>
              <td>
                <input
                 className="parinputfield"
                  type="number"
                  value={hole.par}
                  onChange={(e) => handleParChange(e, index)}
                />
              </td>
              <td>
                <input
                  className="scoreinputfield"
                  type="number"
                  value={hole.score}
                  onChange={(e) => handleScoreChange(e, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addNewLine}>Next Hole</button>
      <div className="totals">
        <p>Course Name: {courseName}</p>
        <p>Course Par: {calculateTotalPar()} </p>
        <p>Total Score: {calculateTotalScore()}</p>
        {(() => {
          const liveScore = calculateTotalScore() - calculateTotalPar();
          if (liveScore === 0) {
            return <p>Live Score: You are shooting Par</p>;
          } else if (liveScore < 0) {
            return <p>Live Score: You are {Math.abs(liveScore)}-under-par</p>;
          } else {
            return <p>Live Score: You are {liveScore}-over-par</p>;
          }
        })()}
      </div>
    </div>
  );
};

export default Scorecard;
