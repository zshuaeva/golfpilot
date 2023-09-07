import React, { useState } from 'react';

const Scorecard = () => {
  const [courseName, setCourseName] = useState('');
  const [holeDetails, setHoleDetails] = useState([
    { holeNumber: 1, par: 0, score: 0 },
  ]);

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
  };

  const handleScoreChange = (e, index) => {
    const updatedHoleDetails = [...holeDetails];
    updatedHoleDetails[index].score = parseInt(e.target.value);
    setHoleDetails(updatedHoleDetails);
  };

  const addNewLine = () => {
    setHoleDetails([...holeDetails, { holeNumber: holeDetails.length + 1, par: 0, score: 0 }]);
  };

  return (
    <>
    <div>
      <h1>Golf Scorecard</h1>
      <label htmlFor="courseName">Course Name:</label>
      <input
        type="text"
        id="courseName"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Hole</th>
            <th>Par</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {holeDetails.map((hole, index) => (
            <tr key={index}>
              <td>{hole.holeNumber}</td>
              <td>
                <input
                  type="number"
                  value={hole.par}
                  onChange={(e) => handleParChange(e, index)}
                />
              </td>
              <td>
                <input
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
      <div>
        <p>Course Name: {courseName}</p>
        <p>Par: {calculateTotalPar()} </p>
        <p>Total Score: {calculateTotalScore()}</p>
        <p>Live Score: {calculateTotalScore() - calculateTotalPar()}</p>
      </div>
    </div>
    </>
  );
};

export default Scorecard;
