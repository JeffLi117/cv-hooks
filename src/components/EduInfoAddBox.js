import React from 'react';

function EduInfoAddBox({school, setSchool, degree, setDegree, major, setMajor, GPA, setGPA, startDate, setStartDate, endDate, setEndDate, addEduInfo}) {

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
    function handleAddEduInfo() {
        addEduInfo()
    }

  return (
    <div className="editEduInfo">
            <div className="edit title">School</div>
            <input
                value={school}
                placeholder="University of Some School"
                onChange={handleSchoolChange} 
            />
            <div className="edit title">Degree</div>
            <input
                value={degree}
                placeholder="Your Degree"
                onChange={handleDegreeChange} 
            />
            <div className="edit title">Major</div>
            <input
                value={major}
                placeholder="Your Major"
                onChange={handleMajorChange} 
            />
            <div className="edit title">GPA</div>
            <input
                value={GPA}
                placeholder="4.0 scale or N/A if not applicable"
                onChange={handleGPAChange} 
            />
            <div className="edit title">Start Date</div>
            <input
                value={startDate}
                placeholder="Start Month & Start Year"
                onChange={handleStartChange} 
            />
            <div className="edit title">End Date</div>
            <input
                value={endDate}
                placeholder="End Month & End Year"
                onChange={handleEndChange} 
            />
            <button onClick={handleAddEduInfo}>Add Education</button>
        </div>
  )
}

export default EduInfoAddBox