import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import QuestionDisplay from './QuestionDisplay';

function Question({questionShowToggle, qShowing}) {
  
    function handleQBoxToggle() {
        questionShowToggle();
    }

    if (qShowing) {
        return (
            <div className="questionHolder">
                <div className="iconQ exitQuestion">
                    <FontAwesomeIcon 
                        icon={faCircleXmark}
                        onClick={handleQBoxToggle}
                    />
                </div>
                <QuestionDisplay />
            </div>
          )
    } else {
        return (
            <div className="questionHolder">
                <div className="iconQ">
                    <FontAwesomeIcon 
                        icon={faCircleQuestion}
                        onClick={handleQBoxToggle}
                    />
                </div>
            </div>
          )
    }
  
}

export default Question