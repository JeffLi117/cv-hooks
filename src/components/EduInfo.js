import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EduInfoAddBox from './EduInfoAddBox';
import EachEdu from './EachEdu';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import uniqid from "uniqid";

function EduInfo({unclickable}) {
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
        setSchool("");
        setDegree("");
        setMajor("");
        setGPA("");
        setStartDate("");
        setEndDate("");
        setEditShowing(!editShowing);
    }
    function saveEduInfo(obj) {
        console.log("saving");
        let foundEdu = totalEdu.findIndex(el => el.ID === obj.ID);
        //Make a shallow copy of the items
        let totalEduCopy = [...totalEdu];
        //Make a shallow copy of the item you want to mutate
        let item = {...totalEduCopy[foundEdu]};
        //Replace the property you're intested in
        item.school = obj.school;
        item.degree = obj.degree;
        item.major = obj.major;
        item.GPA = obj.GPA;
        item.startDate = obj.startDate;
        item.endDate = obj.endDate;
        item.ID = obj.ID;
        //Put it back into our array. N.B. we *are* mutating the array here, 
        //but that's why we made a copy first
        totalEduCopy[foundEdu] = item;
        //Set the state to our new copy
        setTotalEdu(totalEduCopy);
    }
    if (unclickable) {
        return( 
            <div className="wrapper unclickable">
                <div className="sections">Education</div>
                <div className="iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <ul>
                    
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
                                saveEduInfo={saveEduInfo}
                            />
                        )
                    })}
                </ul>
            </div>
        )       
    } else if (editShowing) {
        return( 
            <div className="wrapper">
                <div className="sections">Education</div>
                <div className="iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <ul>
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
                                saveEduInfo={saveEduInfo}
                            />
                        )
                    })}
                </ul>
            </div>
            
        )   
    } else {
        return( 
            <div className="wrapper">
                <div className="sections">Education</div>
                <div className="iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <ul>
                    
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
                                saveEduInfo={saveEduInfo}
                            />
                        )
                    })}
                </ul>
            </div>
        )   
    }
}

export default EduInfo