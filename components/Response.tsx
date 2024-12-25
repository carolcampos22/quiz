import styles from '../styles/Response.module.css'
import ResponseModel from "../model/response";

interface ResponseProps {
    value: ResponseModel
    index: number
    letter: string
    backgroundColorLetter: string
    onResponse: (index: number) => void
}

export default function Response(props: ResponseProps) {
    const response = props.value
    return (
        <div className={styles.response} onClick={() => props.onResponse(props.index)}>
            <div className={styles.responseContent}>
                {!response.revealed ? (
                    <div className={styles.front}>
                        <div className={styles.letter}
                            style={{ backgroundColor: props.backgroundColorLetter }}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {response.value}
                        </div>
                    </div>

                ) : (
                    <div className={styles.back}>
                    {response.right ? (
                        <div className={styles.right}>
                            <div>A resposta certa é...</div>
                            <div className={styles.value}>
                                {response.value}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.wrong}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.value}>
                                {response.value}
                            </div>
                        </div>
                    )}
                </div>
                )}
            </div>
        </div>
    )
}