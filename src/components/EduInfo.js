import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EduInfoAddBox from './EduInfoAddBox';
import EachEdu from './EachEdu';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import uniqid from "uniqid";

function EduInfo() {
    const [school, setSchool] = useState("");    
    const [degree, setDegree] = useState("");   
    const [major, setMajor] = useState("") 
    const [GPA, setGPA] = useState("");  ;  
    const [startDate, setStartDate] = useState("");  
    const [endDate, setEndDate] = useState("");  
    const [totalEdu, setTotalEdu] = useState([{
        school: "Academy of Cheese",
        degree: "Bachelor of Science",
        major: "Cheese Technology",
        GPA: "4.0",
        startDate: "July 2012",
        endDate: "May 2016",
        ID: "randomlyID",
    }])

    const [editShowing, setEditShowing] = useState(false);  
    function handleEditBoxToggle() {
        setEditShowing(!editShowing);
    }
    function addEduInfo() {
        let newID = uniqid();
        console.log(school);
        console.log(totalEdu);
        setTotalEdu((prevState) => ([
            ...prevState,
            {
                school: school,
                degree: degree,
                major: major,
                GPA: GPA,
                startDate: startDate,
                endDate: endDate,
                ID: newID, 
            }
          ]));
    }

    if (editShowing) {
        return( 
            <ul>
                <div className="sections">EduInfo</div>
                <div className="faIconHolder iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <EduInfoAddBox 
                    school={school} setSchool={setSchool}
                    degree={degree} setDegree={setDegree}
                    major={major} setMajor={setMajor}
                    GPA={GPA} setGPA={setGPA}
                    startDate={startDate} setStartDate={setStartDate}
                    endDate={endDate} setEndDate={setEndDate}
                    addEduInfo={addEduInfo}
                />
                {totalEdu.map((schoo) => {
                    return (
                        <EachEdu 
                            key={schoo.ID}
                            ID={schoo.ID} 
                            school={schoo.school} 
                            degree={schoo.degree}
                            major={schoo.major}
                            GPA={schoo.GPA}
                            startDate={schoo.startDate}
                            endDate={schoo.endDate}
                            setSchool={setSchool}
                            setDegree={setDegree}
                            setMajor={setMajor}
                            setGPA={setGPA}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    )
                })}
            </ul>
        )   
    } else {
        return( 
            <ul>
                <div className="sections">EduInfo</div>
                <div className="faIconHolder iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                {totalEdu.map((schoo) => {
                    return (
                        <EachEdu 
                            key={schoo.ID}
                            ID={schoo.ID} 
                            school={schoo.school} 
                            degree={schoo.degree}
                            major={schoo.major}
                            GPA={schoo.GPA}
                            startDate={schoo.startDate}
                            endDate={schoo.endDate}
                            setSchool={setSchool}
                            setDegree={setDegree}
                            setMajor={setMajor}
                            setGPA={setGPA}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    )
                })}
            </ul>
        )   
    }
}

export default EduInfo