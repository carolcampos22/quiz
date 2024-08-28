import QuestionModel from "../../model/question";
import ResponseModel from "../../model/response";

const questions: QuestionModel[] = [
    new QuestionModel(1, 'Qual animal transmite a Doença de Chagas?', [
        ResponseModel.wrong('Abelha'),
        ResponseModel.wrong('Barata'),
        ResponseModel.wrong('Pulga'),
        ResponseModel.right('Barbeiro')
    ]),

    new QuestionModel(2, 'Qual fruto é conhecido no Norte como "jerimum"?', [
        ResponseModel.wrong('Caju'),
        ResponseModel.wrong('Côco'),
        ResponseModel.wrong('Chuchu'),
        ResponseModel.right('Abóbora')
    ]),

    new QuestionModel(3, 'Qual é o coletivo de cães?', [
        ResponseModel.wrong('Manada'),
        ResponseModel.wrong('Alcateia'),
        ResponseModel.wrong('Rebanho'),
        ResponseModel.right('Matilha')
    ]),

    new QuestionModel(4, 'Qual é o triângulo que tem todos os lados diferentes?', [
        ResponseModel.wrong('Equilátero'),
        ResponseModel.wrong('Isósceles'),
        ResponseModel.wrong('Triângulo-retângulo'),
        ResponseModel.right('Escaleno')
    ]),

]

export default questions