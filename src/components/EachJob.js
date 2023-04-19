import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import JobInfoEditBox from './JobInfoEditBox';

function EachJob({ID, comp, title, tasks, startDate, endDate, saveJobInfo}) {

    const [eachComp, setEachComp] = useState(comp);    
    const [eachTitle, setEachTitle] = useState(title);   
    const [eachTasks, setEachTasks] = useState(tasks);
    const [eachStartDate, setEachStartDate] = useState(startDate);  
    const [eachEndDate, setEachEndDate] = useState(endDate);  

    const [editShowing, setEditShowing] = useState(false);  
    function handleEditBoxToggle() {
        setEditShowing(!editShowing);
        if (editShowing) {
            let returnedObj = {
                ID: ID, 
                comp: eachComp, 
                title: eachTitle, 
                tasks: eachTasks, 
                startDate: eachStartDate, 
                endDate: eachEndDate,
            }
            saveJobInfo(returnedObj);
        }
    }

    function closestHandleCompChange(e) {
        setEachComp(e);
    }
    function closestHandleTitleChange(e) {
        setEachTitle(e);
    }
    function closestHandleTasksChange(e) {
        setEachTasks(e);
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
                    <li className="eduList">
                        <div className="main">{eachComp}</div>
                        <div className="submain">{eachTitle}</div>
                        <div>{eachStartDate} - {eachEndDate}</div>
                        <div>Tasks: {eachTasks}</div>
                        
                    </li>
                </div>
                <div className="faIconHolder">
                    <FontAwesomeIcon 
                        icon={faUserEdit}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <JobInfoEditBox 
                    eachComp={eachComp} 
                    closestHandleCompChange={closestHandleCompChange}
                    eachTitle={eachTitle} closestHandleTitleChange={closestHandleTitleChange}
                    eachTasks={eachTasks} closestHandleTasksChange={closestHandleTasksChange}
                    eachStartDate={eachStartDate} closestHandleStartChange={closestHandleStartChange}
                    eachEndDate={eachEndDate} closestHandleEndChange={closestHandleEndChange}
                />
            </div>
        )

    } else {
        return (
            <div key={ID} className="eachEduHolder general">
                <div className="eduLeft">
                    <li className="eduList">
                        <div className="main">{eachComp}</div>
                        <div className="submain">{eachTitle}</div>
                        <div>{eachStartDate} - {eachEndDate}</div>
                        <div>Tasks: {eachTasks}</div>
                        
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

export default EachJob