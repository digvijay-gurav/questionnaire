import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./styles.scss";

import { data } from '../model/questionnaire'

export default function Questionaire() {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const nextQuestionHandler = () => {
        console.log("data.questionnaire.questions.length", data.questionnaire.questions.length);
        console.log("curr", currentQuestion);
        if (currentQuestion < data.questionnaire.questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            alert("This was last question");
        }

    }

    const displayQuestionaire = () => {

        return (
            <div className='outter'>
                <div className={`questionBoxWrapper`}>
                    {
                        currentQuestion < data.questionnaire.questions.length ?
                            data.questionnaire.questions[currentQuestion].question_type == 'multiple-choice' ? (
                                <div className='questionInnerBox'>
                                    <FormGroup>
                                        {data.questionnaire.questions.map((item, outerIndex) => {
                                            return <div className={`questionHidden ${currentQuestion === outerIndex ? 'formVisible' : ''}`}>
                                    <h3>{data.questionnaire.questions[currentQuestion].headline}</h3>

                                                {item.choices?.map((choice, index) => {
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
                            ) : (
                                <div>
                                    <h3>{data.questionnaire.questions[currentQuestion].headline}</h3>
                                    <FormGroup>
                                        <input type='text' />
                                    </FormGroup>
                                    <button onClick={() => nextQuestionHandler()}>Next</button>
                                </div>
                            ) :
                            <div>
                                That was all!
                            </div>
                    }

                </div>
            </div>
        );

    }
    return (
        <div className='mainWrapper'>
            <h1>Welcome to your Questionaire</h1>
            <h2>{data.questionnaire.name}</h2>
            <div>
                {displayQuestionaire()}
            </div>
        </div>
    )
}
