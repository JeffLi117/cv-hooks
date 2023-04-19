import React from 'react';

function JobInfoEditBox({eachComp, eachTitle, eachTasks, eachStartDate, eachEndDate, closestHandleCompChange, closestHandleTitleChange, closestHandleTasksChange,  closestHandleStartChange, closestHandleEndChange}) {

    function handleCompChange(e) {
        closestHandleCompChange(e.target.value);
    }
    function handleTitleChange(e) {
        closestHandleTitleChange(e.target.value);
    }
    function handleTasksChange(e) {
        closestHandleTasksChange(e.target.value);
    }
    function handleStartChange(e) {
        closestHandleStartChange(e.target.value);
    }
    function handleEndChange(e) {
        closestHandleEndChange(e.target.value);
    }

  return (
    <div className="editEduInfo">
            <div className="edit title">Company</div>
            <input
                value={eachComp}
                onChange={handleCompChange} 
            />
            <div className="edit title">Title</div>
            <input
                value={eachTitle}
                onChange={handleTitleChange} 
            />
            <div className="edit title">Tasks</div>
            <textarea  rows="8" cols="24"
                value={eachTasks}
                onChange={handleTasksChange} 
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

export default JobInfoEditBox