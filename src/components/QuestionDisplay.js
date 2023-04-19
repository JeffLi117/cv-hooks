import React from 'react';
import ReactIcon from './ReactIcon.png';
import pray from './pray.jpg';

function QuestionDisplay() {
  return (
    <div className="overlay">
        <div className="qWithinQ" >What is this?</div>
        <div className="imgContainer">
            <div>The second "rendition" of my first app made with React! More specifically, this one only uses functional components!</div>
            <img src={ReactIcon} alt="React icon"/>
        </div>
        <div className="qWithinQ" >How can I use this?</div>
        <div>Print this page and safe it as a PDF! On a computer, this is Ctrl/Command+P. While I don't recommend this for professional use, it's certainly fun to tinker around with!</div>
        <div className="qWithinQ" >Where can I get more?</div>
        <div>Head <a href="https://github.com/JeffLi117">here</a> to check out my other projects!</div>
        <img src={pray} alt="cheese mouse meme" className="smallerImg" />
    </div>
  )
}

export default QuestionDisplay