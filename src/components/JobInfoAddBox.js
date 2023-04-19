import React from 'react';

function JobInfoAddBox({comp, setComp, title, setTitle, tasks, setTasks, startDate, setStartDate, endDate, setEndDate, addJobInfo}) {

    function handleCompChange(e) {
        setComp(e.target.value);
    }
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleTasksChange(e) {
        setTasks(e.target.value);
    }
    function handleStartChange(e) {
        setStartDate(e.target.value);
    }
    function handleEndChange(e) {
        setEndDate(e.target.value);
    }
    function handleAddJobInfo() {
        addJobInfo()
    }
    
  return (
    <div className="editEduInfo">
            <div className="edit title">Company</div>
            <input
                value={comp}
                placeholder="Your Company Name"
                onChange={handleCompChange} 
            />
            <div className="edit title">Title</div>
            <input
                value={title}
                placeholder="Your Title"
                onChange={handleTitleChange} 
            />
            <div className="edit title">Tasks</div>
            <textarea  rows="8" cols="24"
                value={tasks}
                placeholder="Your Main Tasks"
                onChange={handleTasksChange} 
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
            <button onClick={handleAddJobInfo}>Add Job</button>
        </div>
  )
}

export default JobInfoAddBox