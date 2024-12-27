import styles from '../styles/Question.module.css'
import QuestionModel from "../model/question";
import Prompt from './Prompt';
import Response from './Response';
import Timer from './Timer';

interface QuestionProps {
    value: QuestionModel
    timeToAnswer?: number
    onResponse: (index: number) => void
    timeOut: () => void
}

const letters = [
    { value: 'A', color: '#da920c' },
    { value: 'B', color: '#F266BA' },
    { value: 'C', color: '#85D4F2' },
    { value: 'D', color: '#ace279' },
]

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderResponses() {
        return question.responses.map((response, i) => {
            return <Response
                key={`${question.id}-${i}`}
                value={response}
                index={i}
                letter={letters[i].value}
                backgroundColorLetter={letters[i].color}
                onResponse={props.onResponse}
            />
        })
    }

    return (
        <div className={styles.question}>
            <Prompt text={question.question} />
            <Timer key={question.id} duration={props.timeToAnswer ?? 10} timeOut={props.timeOut} />
            {renderResponses()}
        </div>
    )
}