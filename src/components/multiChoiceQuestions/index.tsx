import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function MultiChoiceQuestions({ item, currentQuestion, nextQuestionHandler, previousQuestionHandler }:
    { item: any, currentQuestion: number, nextQuestionHandler: Function, previousQuestionHandler: Function }) {
    return (

        <FormGroup className='justify-center'>

            <h3>{item.headline}</h3>
            {item.choices?.map((choice: any, index: number) => {
                return <FormControlLabel
                    key={index}
                    control={<Checkbox />}
                    value={choice.value}
                    label={choice.label}
                />

            })
            }
        </FormGroup>

    )
}
