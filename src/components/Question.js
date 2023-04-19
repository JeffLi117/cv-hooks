import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import QuestionDisplay from './QuestionDisplay';

function Question({handleQuestionToggler, qShowing}) {
  
    function handleQBoxToggle() {
        handleQuestionToggler();
    }

    if (qShowing) {
        return (
            <div className="questionHolder">
                <div className="faIconHolder exitQuestion">
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
                <div className="faIconHolder">
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