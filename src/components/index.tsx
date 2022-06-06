import React, { useState } from 'react';
import "./styles.scss";
import { data } from '../model/questionnaire';
import MultiChoiceQuestions from './multiChoiceQuestions';
import InputTypeQuestion from './inputChoiceQuestions';

export default function Questionaire() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [classApplied, setClassApplied] = useState('')

    const nextQuestionHandler = () => {
        if (currentQuestion < data.questionnaire.questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            setClassApplied('next')
        } else {
            alert("This was last question");
        }
    }

    const previousQuestionHandler = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
            setClassApplied('prev')
        } else {
            alert("This was first question");
        }
    }
    const displayQuestionaire = () => {
        return (
            <div className='outter'>
                <div className={`questionBoxWrapper`}>
                    {currentQuestion < data.questionnaire.questions.length ?
                        data.questionnaire.questions.map((item: any, outerIndex: number) => {
                            return (
                                <div className={`questionHidden ${currentQuestion === outerIndex ? `formVisible ${classApplied}` : ''}`}>
                                    {data.questionnaire.questions[currentQuestion].question_type == 'multiple-choice' ? (
                                        <MultiChoiceQuestions item={item} currentQuestion={currentQuestion} nextQuestionHandler={nextQuestionHandler} previousQuestionHandler={previousQuestionHandler} />
                                    ) : (
                                        <InputTypeQuestion item={item} currentQuestion={currentQuestion} nextQuestionHandler={nextQuestionHandler} previousQuestionHandler={previousQuestionHandler} />
                                    )}

                                </div>
                            )
                        })
                        :
                        <div>
                            That's all
                        </div>
                    }
                    <div className='actionItem'>

                        {currentQuestion < data.questionnaire.questions.length ?
                            <>
                                <button disabled={currentQuestion === 0} onClick={() => previousQuestionHandler()}>Previous</button>
                                {currentQuestion < data.questionnaire.questions.length - 1 && <button onClick={() => nextQuestionHandler()}>Next</button>}
                            </> :
                            <button onClick={() => setCurrentQuestion(0)}>Start Over</button>

                        }
                        {currentQuestion === data.questionnaire.questions.length - 1 &&
                            <button onClick={() => nextQuestionHandler()}>Submit</button>}
                    </div>
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
