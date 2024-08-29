import Question from '../components/Question';
import QuestionModel from '../model/question';
import ResponseModel from '../model/response';
import styles from '../styles/Home.module.css'

export default function Home() {
  const questaoTeste = new QuestionModel(300, 'Melhor cor?', [
    ResponseModel.wrong('Verde'),
    ResponseModel.wrong('Vermelha'),
    ResponseModel.wrong('Azul'),
    ResponseModel.right('Rosa')
  ])
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    }}>
      <Question value={questaoTeste}/>
    </div>
  );
}
