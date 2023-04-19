import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import GenInfoEditBox from './GenInfoEditBox';

function GenInfo({unclickable}) {

    const [userName, setUserName] = useState("Pizza Fanatic");    
    const [title, setTitle] = useState("Mr.");  
    const [profile, setProfile] = useState("Diets? Counting calories? Fitness? The only kind of fitness I'm into is fitness pizza into my mouth! Get ready to dive into my cheesy CV filled with excessive references to all things pizza-related.");
    const [editShowing, setEditShowing] = useState(false);  
    function handleEditBoxToggle() {
        setEditShowing(!editShowing);
    }

    if (unclickable) {
        return (
            <div className="unclickable" >
                <div className="sections">General</div>
                <div className="general">                    
                    <div className="main">{title} {userName}</div>
                    <div>{profile}</div>
                    <div className="faIconHolder">
                        <FontAwesomeIcon 
                            icon={faUserEdit}
                            onClick={handleEditBoxToggle}
                        />
                    </div>
                </div>
            </div>
            
        )
    } else if (editShowing) {
        return (
            <div>
                <div className="sections">General</div>
                <div className="general">
                    <div className="main">{title} {userName}</div>
                    <div>{profile}</div>
                    <div className="faIconHolder">
                        <FontAwesomeIcon 
                            icon={faUserEdit}
                            onClick={handleEditBoxToggle}
                        />
                    </div>
                    <GenInfoEditBox 
                        userName={userName}
                        title={title}
                        profile={profile}
                        setUserName={setUserName}
                        setTitle={setTitle}
                        setProfile={setProfile}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="sections">General</div>
                <div className="general">                    
                    <div className="main">{title} {userName}</div>
                    <div>{profile}</div>
                    <div className="faIconHolder">
                        <FontAwesomeIcon 
                            icon={faUserEdit}
                            onClick={handleEditBoxToggle}
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default GenInfo