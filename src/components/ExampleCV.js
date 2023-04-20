import React, { useState } from 'react';
import GenInfo from './GenInfo';
import EduInfo from './EduInfo';
import WorkInfo from './WorkInfo';
import cheesus from './cheesus.jpg';

export default function ExampleCV({backgroundlay}) {

  const [image, setImage] = useState(cheesus)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  if (backgroundlay) {
    return (
      <div className="backgroundlay">
        <div className="overall">
          <div className="imgChangeHolder">
            <img src={image} alt="cheesus christ" className="smallestImg" />
            <input type="file" onChange={onImageChange} className="filetype" />
          </div>
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
      </div>
      
    )
  } else {
    return (
      <div className="overall">
          <div className="imgChangeHolder">
            <img src={image} alt="cheesus christ" className="smallestImg" />
            <input type="file" onChange={onImageChange} className="filetype" />
          </div>
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
