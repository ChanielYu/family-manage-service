import type { NextApiRequest, NextApiResponse } from 'next';

interface ProcessResponse {
  message: string;
  data: any;
}

interface ErrorResponse {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProcessResponse | ErrorResponse>
) {
  if (req.method === 'POST') {
    try {
      // Logic to process the data
      const result: ProcessResponse = {
        message: 'Data processed successfully',
        data: req.body
      };
      res.status(200).json(result);
    } catch (error) {
      const errorResponse: ErrorResponse = { error: 'Error processing data' };
      res.status(500).json(errorResponse);
    }
  } else {
    const errorResponse: ErrorResponse = { error: 'Method not allowed' };
    res.status(405).json(errorResponse);
  }
}