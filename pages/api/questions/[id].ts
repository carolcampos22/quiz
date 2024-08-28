// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionBank";

// type Data = {
//   id: number
//   name: string;
// };

export default (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.query.id !== undefined) {
    const selectedId = +req.query.id
    const questionExistsOrNot = questions.filter(question => question.id === selectedId)

    if(questionExistsOrNot.length === 1){
      const selectedQuestion = questionExistsOrNot[0]
      res.status(200).json(selectedQuestion.toObject());
    } else {
      res.status(204).send(res)
    } 
  } else {
    res.status(400);
  }
}

