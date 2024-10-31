import { signIn } from 'controller/auth/authcontroller';
import { MethodNotAllowed } from 'config/api/responses';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      return signIn(req, res);
    default:
      res.setHeader('Allow', ['POST']);
      return res
        .status(MethodNotAllowed)
        .end(`Method ${req.method} Not Allowed`);
  }
}