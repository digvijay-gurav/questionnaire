import React from 'react';
import FormGroup from '@mui/material/FormGroup';

export default function InputTypeQuestion({data, currentQuestion, nextQuestionHandler}: {data: any, currentQuestion: number, 
    nextQuestionHandler: Function}) {
  return (
    <div>
        <h3>{data.questionnaire.questions[currentQuestion].headline}</h3>
        <FormGroup>
            <input type='text' />
        </FormGroup>
        <button onClick={() => nextQuestionHandler()}>Next</button>
    </div>
  )
}
