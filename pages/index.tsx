import { useEffect, useState } from 'react';
import Question from '../components/Question';
import QuestionModel from '../model/question';
import ResponseModel from '../model/response';
import styles from '../styles/Home.module.css'
import Button from '../components/Button';
import Questionnaire from '../components/Questionnaire';
import { useRouter } from 'next/router';


const BASE_URL = 'http://localhost:3000/api'
export default function Home() {
  const router = useRouter()

  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [rightAnswers, setRightAnswers] = useState<number>(0)

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const questionsIds = await resp.json()
    console.log(questionsIds);

    setQuestionsIds(questionsIds)
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadQuestionsIds()
  }, [])

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion)
    const right = answeredQuestion.rightAnswer
    setRightAnswers(rightAnswers + (right ? 1 : 0))
  }

  function idNextQuestion() {
    const nextIndex = questionsIds.indexOf(question ? question.id : 0) + 1
      return questionsIds[nextIndex]
  }

  function goToNextStep() {
    const nextId = idNextQuestion()
    nextId ? goToNextQuestion(nextId) : endQuestions()
  }

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function endQuestions() {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
        right: rightAnswers
      }
    })
  }

  return question? (
    <Questionnaire
        question={question}
        last={idNextQuestion() === undefined}
        answeredQuestion={answeredQuestion}
        goToNextStep={goToNextStep}
      />
  ) : false;
}
