import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionBank";

export default (req: NextApiRequest, res:NextApiResponse) => {
    res.status(200).json(questions.map(question => question.id))
}