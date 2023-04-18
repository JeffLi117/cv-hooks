import React from 'react';

function GenInfoEditBox({ setUserName, setTitle, setProfile, userName, title, profile}) {

    function handleNameChange(e) {
        setUserName(e.target.value);
    }
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleProfileChange(e) {
        setProfile(e.target.value);
    }

  return (
    <div className="editGenInfo">
            <div className="edit title">Your name</div>
            <input
                value={userName}
                onChange={handleNameChange} 
            />
            <div className="edit title">Your Title</div>
            <input
                value={title}
                onChange={handleTitleChange} 
            />
            <div className="edit title">Your Profile</div>
            <input
                value={profile}
                onChange={handleProfileChange} 
            />
        </div>
  )
}

export default GenInfoEditBox