import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import EduInfoEditBox from './EduInfoEditBox';

function EachEdu({ID, school, degree, major, GPA, startDate, endDate, setSchool, setDegree, setMajor, setGPA, setStartDate, setEndDate}) {
    const [editShowing, setEditShowing] = useState(false);  
    function handleEditBoxToggle() {
        setEditShowing(!editShowing);
    }
    if (editShowing) {
        return (
            <div>
                <div key={ID} className="eachEduHolder general">
                    <div className="eduLeft">
                        <li className="eduList">
                            <div>{school}</div>
                            <div>{degree} in {major}</div>
                            <div>GPA: {GPA}</div>
                            <div>{startDate} - {endDate}</div>
                        </li>
                    </div>
                    <div className="faIconHolder">
                        <FontAwesomeIcon 
                            icon={faUserEdit}
                            onClick={handleEditBoxToggle}
                        />
                    </div>
                </div>
                <EduInfoEditBox 
                    school={school} setSchool={setSchool}
                    degree={degree} setDegree={setDegree}
                    major={major} setMajor={setMajor}
                    GPA={GPA} setGPA={setGPA}
                    startDate={startDate} setStartDate={setStartDate}
                    endDate={endDate} setEndDate={setEndDate}
                />
            </div>
        )

    } else {
        return (
            <div key={ID} className="eachEduHolder general">
                <div className="eduLeft">
                    <li className="eduList">
                        <div>{school}</div>
                        <div>{degree} in {major}</div>
                        <div>GPA: {GPA}</div>
                        <div>{startDate} - {endDate}</div>
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