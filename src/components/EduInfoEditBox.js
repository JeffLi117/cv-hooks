import React from 'react';

function EduInfoEditBox({eachSchool, eachDegree, eachMajor, eachGPA, eachStartDate, eachEndDate, closestHandleSchoolChange, closestHandleDegreeChange, closestHandleMajorChange, closestHandleGPAChange, closestHandleStartChange, closestHandleEndChange}) {

    function handleSchoolChange(e) {
        closestHandleSchoolChange(e.target.value);
    }
    function handleDegreeChange(e) {
        closestHandleDegreeChange(e.target.value);
    }
    function handleMajorChange(e) {
        closestHandleMajorChange(e.target.value);
    }
    function handleGPAChange(e) {
        closestHandleGPAChange(e.target.value);
    }
    function handleStartChange(e) {
        closestHandleStartChange(e.target.value);
    }
    function handleEndChange(e) {
        closestHandleEndChange(e.target.value);
    }

  return (
    <div className="editEduInfo">
            <div className="edit title">School</div>
            <input
                value={eachSchool}
                onChange={handleSchoolChange} 
            />
            <div className="edit title">Degree</div>
            <input
                value={eachDegree}
                onChange={handleDegreeChange} 
            />
            <div className="edit title">Major</div>
            <input
                value={eachMajor}
                onChange={handleMajorChange} 
            />
            <div className="edit title">GPA</div>
            <input
                value={eachGPA}
                onChange={handleGPAChange} 
            />
            <div className="edit title">Start Date</div>
            <input
                value={eachStartDate}
                onChange={handleStartChange} 
            />
            <div className="edit title">End Date</div>
            <input
                value={eachEndDate}
                onChange={handleEndChange} 
            />
        </div>
  )
}

export default EduInfoEditBox