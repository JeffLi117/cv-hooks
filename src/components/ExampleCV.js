import React, { useState } from 'react';
import GenInfo from './GenInfo';
import EduInfo from './EduInfo';
import WorkInfo from './WorkInfo';
import Question from './Question';
import cheesus from './cheesus.jpg';

export default function ExampleCV({questionShowToggle, qShowing}) {

  const [image, setImage] = useState(cheesus)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  /* return (
    <div>
      <input type="file" onChange={onImageChange} className="filetype" />
      <img alt="preview image" src={image}/>
    </div>
  ) */

  function handleQuestionToggler() {
    questionShowToggle()
  }


  if (qShowing) {
    return (
      <div className="overall">
          <div className="imgChangeHolder">
            <img src={image} alt="cheesus christ" className="smallestImg" />
            <input type="file" onChange={onImageChange} className="filetype" />
          </div>
          <Question 
            qShowing={qShowing}
            handleQuestionToggler={handleQuestionToggler}
          />
          <GenInfo unclickable="unclickable" />
          <div className="notGen">
            <div className="eduStuff">
              <EduInfo unclickable="unclickable" />
            </div>
            <div className="workStuff">
              <WorkInfo unclickable="unclickable" />
            </div>
          </div>
      </div>
    ) 
  } else {
    return (
      <div className="overall">
          <div className="imgChangeHolder">
            <img src={image} alt="cheesus christ" className="smallestImg" />
            <input type="file" onChange={onImageChange} className="filetype" />
          </div>
          <Question 
            qShowing={qShowing}
            handleQuestionToggler={handleQuestionToggler}
          />
          <GenInfo />
          <div className="notGen">
            <div className="eduStuff">
              <EduInfo />
            </div>
            <div className="workStuff">
              <WorkInfo />
            </div>
          </div>
      </div>
    )
  }
  
}
