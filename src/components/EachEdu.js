import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import EduInfoEditBox from './EduInfoEditBox';

function EachEdu({ID, school, degree, major, GPA, startDate, endDate, saveEduInfo}) {

    const [eachSchool, setEachSchool] = useState(school);    
    const [eachDegree, setEachDegree] = useState(degree);   
    const [eachMajor, setEachMajor] = useState(major) 
    const [eachGPA, setEachGPA] = useState(GPA);  ;  
    const [eachStartDate, setEachStartDate] = useState(startDate);  
    const [eachEndDate, setEachEndDate] = useState(endDate);  

    const [editShowing, setEditShowing] = useState(false);  
    function handleEditBoxToggle() {
        setEditShowing(!editShowing);
        if (editShowing) {
            let returnedObj = {
                ID: ID, 
                school: eachSchool, 
                degree: eachDegree, 
                major: eachMajor, 
                GPA: eachGPA, 
                startDate: eachStartDate, 
                endDate: eachEndDate,
            }
            saveEduInfo(returnedObj);
        }
    }

    function closestHandleSchoolChange(e) {
        setEachSchool(e);
    }
    function closestHandleDegreeChange(e) {
        setEachDegree(e);
    }
    function closestHandleMajorChange(e) {
        setEachMajor(e);
    }
    function closestHandleGPAChange(e) {
        setEachGPA(e);
    }
    function closestHandleStartChange(e) {
        setEachStartDate(e);
    }
    function closestHandleEndChange(e) {
        setEachEndDate(e);
    }
    
    if (editShowing) {
        return (
            <div key={ID} className="eachEduHolder general">
                <div className="eduLeft">
                    <EduInfoEditBox 
                        eachSchool={eachSchool} closestHandleSchoolChange={closestHandleSchoolChange}
                        eachDegree={eachDegree} closestHandleDegreeChange={closestHandleDegreeChange}
                        eachMajor={eachMajor} closestHandleMajorChange={closestHandleMajorChange}
                        eachGPA={eachGPA} closestHandleGPAChange={closestHandleGPAChange}
                        eachStartDate={eachStartDate} closestHandleStartChange={closestHandleStartChange}
                        eachEndDate={eachEndDate} closestHandleEndChange={closestHandleEndChange}
                    />
                </div>
                <div className="faIconHolder">
                    <FontAwesomeIcon 
                        icon={faUserEdit}
                        onClick={handleEditBoxToggle}
                    />
                </div>
            </div>
        )

    } else {
        return (
            <div key={ID} className="eachEduHolder general">
                <div className="eduLeft">
                    <li className="eduList">
                        <div className="main">{eachSchool}</div>
                        <div className="submain">{eachDegree} in {eachMajor}</div>
                        <div className="dates">{eachStartDate} - {eachEndDate}</div>
                        <div className="dates">GPA: {eachGPA}</div>
                    </li>
                </div>
                <div className="faIconHolder">
                    <FontAwesomeIcon 
                        icon={faUserEdit}
                        onClick={handleEditBoxToggle}
                    />
                </div>
            </div>
        )
    }
}

export default EachEdu