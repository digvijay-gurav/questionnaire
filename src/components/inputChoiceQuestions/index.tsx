import React from 'react';
import FormGroup from '@mui/material/FormGroup';

export default function InputTypeQuestion({item, currentQuestion, nextQuestionHandler, previousQuestionHandler}: 
    {item: any, currentQuestion: number, nextQuestionHandler: Function, previousQuestionHandler: Function}) {
  return (
    <div>
        <h3>{item.headline}</h3>
        <FormGroup className='justify-center'>
            <input type='text' />
        </FormGroup>
    </div>
  )
}
