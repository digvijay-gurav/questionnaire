import React, { useState } from 'react';
import "./styles.scss";
import { data } from '../model/questionnaire';
import MultiChoiceQuestions from './multiChoiceQuestions';
import InputTypeQuestion from './inputChoiceQuestions';

export default function Questionaire() {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const nextQuestionHandler = () => {
        if (currentQuestion < data.questionnaire.questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            alert("This was last question");
        }

    }

    const previousQuestionHandler = () => {
        if (currentQuestion > -1) {
            setCurrentQuestion(currentQuestion - 1)
        } else {
            alert("This was first question");
        }
    }

    const displayQuestionaire = () => {

        return (
            <div className='outter'>
                <div className={`questionBoxWrapper`}>
                    {
                        currentQuestion < data.questionnaire.questions.length ?
                            data.questionnaire.questions[currentQuestion].question_type == 'multiple-choice' ? (
                                <MultiChoiceQuestions data={data} currentQuestion={currentQuestion} nextQuestionHandler={nextQuestionHandler} previousQuestionHandler={previousQuestionHandler} />
                            ) : (
                                <InputTypeQuestion data={data} currentQuestion={currentQuestion} nextQuestionHandler={nextQuestionHandler} previousQuestionHandler={previousQuestionHandler} />
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
