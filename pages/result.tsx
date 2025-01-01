import Button from '../components/Button'
import Statistic from '../components/Statistic'
import styles from '../styles/Result.module.css'
import { useRouter } from "next/router"

export default function result() {
    const router = useRouter()

    const total = Number(router.query.total)
    const right = Number(router.query.right)

    console.log(total)

    const percentage = Math.round((right / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Resultado final</h1>
            <div style={{
                display: "flex",
            }}>
                <Statistic text='Perguntas' value={total} />
                <Statistic text='Respostas certas' value={right} />
                <Statistic text='Percentual' value={`${percentage}%`} />
            </div>
            <Button href='/' text='Tentar novamente' />
        </div>
    )
}