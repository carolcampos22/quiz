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
    const responseRevealed = response.revealed ? styles.responseRevealed : ''
    return (
        <div className={styles.response} onClick={() => props.onResponse(props.index)}>
            <div className={`${responseRevealed} ${styles.responseContent}`}>

                <div className={styles.front}>
                    <div className={styles.letter}
                        style={{ backgroundColor: props.backgroundColorLetter }}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {response.value}
                    </div>
                </div>

                <div className={styles.back}>
                    {response.right ? (
                        <div className={styles.right}>
                            <div style={{ backgroundColor: 'transparent', color: 'black' }}>A resposta certa é...</div>
                            <div className={styles.value}>
                                {response.value}
                            </div>
                        </div>
                        
                    ) : (
                        <div className={styles.wrong}>
                            <div style={{ backgroundColor: 'transparent', color: 'black' }}>A resposta informada está errada...</div>
                            <div className={styles.value}>
                                {response.value}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}