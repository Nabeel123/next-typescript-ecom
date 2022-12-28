import { NextApiResponse } from 'next'

const asyncHandler = (fn: CallableFunction) => (
  req: NextApiResponse,
  res: NextApiResponse
) => {
  Promise.resolve(fn(req, res)).catch( )
}

export default asyncHandler
