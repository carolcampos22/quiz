import { useState } from 'react';
import Question from '../components/Question';
import QuestionModel from '../model/question';
import ResponseModel from '../model/response';
import styles from '../styles/Home.module.css'

const questionMock = new QuestionModel(300, 'Melhor cor?', [
  ResponseModel.wrong('Verde'),
  ResponseModel.wrong('Vermelha'),
  ResponseModel.wrong('Azul'),
  ResponseModel.right('Rosa')
])
export default function Home() {

  const [question, setQuestion] = useState(questionMock)

  function onResponse(index: number){
    console.log(index);
    setQuestion(question.answerWith(index))
    
    
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Question
        value={question}
        onResponse={onResponse }
      />
    </div>
  );
}
