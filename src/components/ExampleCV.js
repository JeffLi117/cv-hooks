import React from 'react';
import GenInfo from './GenInfo';
import EduInfo from './EduInfo';

export default function ExampleCV() {

  return (
    <div className="overall">
        <div>This should be the overall CV holder</div>
        <GenInfo />
        <EduInfo />
    </div>
  )
}
