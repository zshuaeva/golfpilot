import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './scorecard.css';


const columns = [
  { id: 'holeNumber', label: 'Hole', minWidth: 100 },
  { id: 'par', label: 'Par', minWidth: 100 },
  { id: 'score', label: 'Score', minWidth: 100 },
];

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
        className="course-name-input"
      />
      <Paper elevation={6} className="tables-container">
        <TableContainer>
          <Table>
            <TableHead className="tables-head">
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} className="table-cell-header">
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {holeDetails.map((hole, index) => (
                <TableRow key={index} className="table-row">
                  {columns.map((column) => (
                    <TableCell key={column.id} className="table-cell">
                      {column.id === 'holeNumber' ? hole.holeNumber : (
                        <input
                          type="number"
                          value={hole[column.id]}
                          onChange={(e) => (
                            column.id === 'par' ? handleParChange(e, index) : handleScoreChange(e, index)
                          )}
                          className="scoreinputfield"
                        />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <button onClick={addNewLine} className="add-button">Next Hole</button>
      <div className="totals">
        <p>Course Name: {courseName}</p>
        <p>Course Par Total: {calculateTotalPar()} </p>
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
