import React from 'react';

function EduInfoEditBox({school, setSchool, degree, setDegree, major, setMajor, GPA, setGPA, startDate, setStartDate, endDate, setEndDate}) {

    function handleSchoolChange(e) {
        setSchool(e.target.value);
    }
    function handleDegreeChange(e) {
        setDegree(e.target.value);
    }
    function handleMajorChange(e) {
        setMajor(e.target.value);
    }
    function handleGPAChange(e) {
        setGPA(e.target.value);
    }
    function handleStartChange(e) {
        setStartDate(e.target.value);
    }
    function handleEndChange(e) {
        setEndDate(e.target.value);
    }

  return (
    <div className="editEduInfo">
            <div className="edit title">School</div>
            <input
                value={school}
                onChange={handleSchoolChange} 
            />
            <div className="edit title">Degree</div>
            <input
                value={degree}
                onChange={handleDegreeChange} 
            />
            <div className="edit title">Major</div>
            <input
                value={major}
                onChange={handleMajorChange} 
            />
            <div className="edit title">GPA</div>
            <input
                value={GPA}
                onChange={handleGPAChange} 
            />
            <div className="edit title">Start Date</div>
            <input
                value={startDate}
                onChange={handleStartChange} 
            />
            <div className="edit title">End Date</div>
            <input
                value={endDate}
                onChange={handleEndChange} 
            />
        </div>
  )
}

export default EduInfoEditBox