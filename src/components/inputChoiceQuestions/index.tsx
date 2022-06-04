import React from 'react';
import FormGroup from '@mui/material/FormGroup';

export default function InputTypeQuestion({data, currentQuestion, nextQuestionHandler, previousQuestionHandler}: 
    {data: any, currentQuestion: number, nextQuestionHandler: Function, previousQuestionHandler: Function}) {
  return (
    <div>
        <h3>{data.questionnaire.questions[currentQuestion].headline}</h3>
        <FormGroup>
            <input type='text' />
        </FormGroup>
        <button onClick={() => previousQuestionHandler()}>Previous</button>
        <button onClick={() => nextQuestionHandler()}>Next</button>
    </div>
  )
}
