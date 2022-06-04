import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function MultiChoiceQuestions({data, currentQuestion, nextQuestionHandler}: {data: any, currentQuestion: number, 
    nextQuestionHandler: Function}) {
  return (
        
        <div className='questionInnerBox'>
            <FormGroup>
                {data.questionnaire.questions.map((item: any, outerIndex: number) => {
                    return <div className={`questionHidden ${currentQuestion === outerIndex ? 'formVisible' : ''}`}>
                        <h3>{data.questionnaire.questions[currentQuestion].headline}</h3>
                            {item.choices?.map((choice: any, index: number) => {
                                return <FormControlLabel
                                key={index}
                                control={<Checkbox />}
                                value={choice.value}
                                label={choice.label}
                            />
                            })}
                    </div>
                })
                }
            </FormGroup>
            <button onClick={() => nextQuestionHandler()}>Next</button>
        </div>
  )
}
