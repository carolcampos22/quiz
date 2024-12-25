import styles from '../styles/Question.module.css'
import QuestionModel from "../model/question";
import Prompt from './Prompt';
import Response from './Response';

interface QuestionProps {
    value: QuestionModel
    onResponse: (index: number) => void
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
                key={i}
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
            {renderResponses()}
        </div>
    )
}