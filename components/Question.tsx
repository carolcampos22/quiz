import styles from '../styles/Question.module.css'
import QuestionModel from "../model/question";
import Prompt from './Prompt';

interface QuestionProps {
    value: QuestionModel
}

export default function Question(props: QuestionProps){
    const question = props.value

    return (
        <div className={styles.question}> 
            <Prompt text={question.question} />
        </div>
    )
}