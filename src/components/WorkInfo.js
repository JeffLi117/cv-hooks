import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JobInfoAddBox from './JobInfoAddBox';
import EachJob from './EachJob';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import uniqid from "uniqid";

function WorkInfo({unclickable}) {
    const [comp, setComp] = useState("");    
    const [title, setTitle] = useState("");   
    const [tasks, setTasks] = useState("") 
    const [startDate, setStartDate] = useState("");  
    const [endDate, setEndDate] = useState("");  
    const [totalJobs, setTotalJobs] = useState([{
        comp: "Cheesiest Corporation",
        title: "Taste Tester",
        tasks: "Distinguish between delectable cheeses from all over the globe; create matching flavor profiles to accompanying foods and drinks; tailored recipes revolving around said cheeses",
        startDate: "June 2017",
        endDate: "August 2020",
        ID: "randomlyID2",
    }])

    const [editShowing, setEditShowing] = useState(false);  
    function handleEditBoxToggle() {
        setEditShowing(!editShowing);
    }
    function addJobInfo() {
        let newID = uniqid();
        console.log(totalJobs);
        setTotalJobs((prevState) => ([
            ...prevState,
            {
                comp: comp,
                title: title,
                tasks: tasks,
                startDate: startDate,
                endDate: endDate,
                ID: newID, 
            }
          ]));
        setComp("");
        setTitle("");
        setTasks("");
        setStartDate("");
        setEndDate("");
        setEditShowing(!editShowing);
    }

    function saveJobInfo(obj) {
        console.log("saving");
        let foundJob = totalJobs.findIndex(el => el.ID === obj.ID);
        //Make a shallow copy of the items
        let totalJobsCopy = [...totalJobs];
        //Make a shallow copy of the item you want to mutate
        let item = {...totalJobsCopy[foundJob]};
        //Replace the property you're intested in
        item.comp = obj.comp;
        item.title = obj.title;
        item.tasks = obj.tasks;
        item.startDate = obj.startDate;
        item.endDate = obj.endDate;
        item.ID = obj.ID;
        //Put it back into our array. N.B. we *are* mutating the array here, 
        //but that's why we made a copy first
        totalJobsCopy[foundJob] = item;
        //Set the state to our new copy
        setTotalJobs(totalJobsCopy);
    }

    if (unclickable) {
        return( 
            <div className="wrapper unclickable">
                <div className="sections">Work Experience</div>
                <div className="faIconHolder iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <ul>
                    {totalJobs.map((job) => {
                        return (
                            <EachJob 
                                key={job.ID}
                                ID={job.ID} 
                                comp={job.comp} 
                                title={job.title}
                                tasks={job.tasks}
                                startDate={job.startDate}
                                endDate={job.endDate}
                                setComp={setComp}
                                setTitle={setTitle}
                                setTasks={setTasks}
                                setStartDate={setStartDate}
                                setEndDate={setEndDate}
                                saveJobInfo={saveJobInfo}
                            />
                        )
                    })}
                </ul>
            </div>
        )   
    } else if (editShowing) {
        return( 
            <div className="wrapper">
                <div className="sections">Work Experience</div>
                <div className="faIconHolder iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <ul>
                    <JobInfoAddBox 
                        comp={comp} setComp={setComp}
                        title={title} setTitle={setTitle}
                        tasks={tasks} setTasks={setTasks}
                        startDate={startDate} setStartDate={setStartDate}
                        endDate={endDate} setEndDate={setEndDate}
                        addJobInfo={addJobInfo}
                    />
                    {totalJobs.map((job) => {
                        return (
                            <EachJob 
                                key={job.ID}
                                ID={job.ID} 
                                comp={job.comp} 
                                title={job.title}
                                tasks={job.tasks}
                                startDate={job.startDate}
                                endDate={job.endDate}
                                setComp={setComp}
                                setTitle={setTitle}
                                setTasks={setTasks}
                                setStartDate={setStartDate}
                                setEndDate={setEndDate}
                                saveJobInfo={saveJobInfo}
                            />
                        )
                    })}
                </ul>
            </div>
            
        )   
    } else {
        return( 
            <div className="wrapper">
                <div className="sections">Work Experience</div>
                <div className="faIconHolder iconPlus">
                    <FontAwesomeIcon 
                        icon={faPlusSquare}
                        onClick={handleEditBoxToggle}
                    />
                </div>
                <ul>
                    {totalJobs.map((job) => {
                        return (
                            <EachJob 
                                key={job.ID}
                                ID={job.ID} 
                                comp={job.comp} 
                                title={job.title}
                                tasks={job.tasks}
                                startDate={job.startDate}
                                endDate={job.endDate}
                                setComp={setComp}
                                setTitle={setTitle}
                                setTasks={setTasks}
                                setStartDate={setStartDate}
                                setEndDate={setEndDate}
                                saveJobInfo={saveJobInfo}
                            />
                        )
                    })}
                </ul>
            </div>
        )   
    }
}

export default WorkInfo