import styles from '../styles/Questionnaire.module.css'
import QuestionModel from "../model/question"
import Question from './Question'
import Button from './Button'

interface QuestionnaireProps {
    question: QuestionModel
    last: boolean
    answeredQuestion: (question: QuestionModel) => void
    goToNextStep: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {

    function onResponse(index: number) {
        if(!props.question.answered){
            props.answeredQuestion(props.question.answerWith(index))
        }
    }

    return (
        <div className={styles.questionnaire}>
            {props.question ? (
                <Question
                    value={props.question}
                    timeToAnswer={5}
                    onResponse={onResponse}
                    timeOut={props.goToNextStep}
                />
            ) : false}


            <Button onClick={props.goToNextStep}
                text={props.last ? 'Finalizar' : 'Próxima pergunta'}
            />
        </div>
    )
}