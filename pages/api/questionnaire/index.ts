import type { NextApiRequest, NextApiResponse } from "next";
import questions from "../questionBank";
import { shuffle } from "../../../functions/arrays";

export default (req: NextApiRequest, res:NextApiResponse) => {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}