import styles from '../styles/Prompt.module.css'

interface PromptProps {
    text: string
}

export default function Prompt(props: PromptProps){
    return (
        <div className={styles.prompt}>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}