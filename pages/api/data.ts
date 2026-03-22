import type { NextApiRequest, NextApiResponse } from 'next';

interface DataResponse {
  message: string;
  timestamp: Date;
}

interface ErrorResponse {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse | ErrorResponse>
) {
  if (req.method === 'GET') {
    try {
      // Logic to fetch data
      const data: DataResponse = {
        message: 'Data fetched successfully',
        timestamp: new Date()
      };
      res.status(200).json(data);
    } catch (error) {
      const errorResponse: ErrorResponse = { error: 'Error fetching data' };
      res.status(500).json(errorResponse);
    }
  } else {
    const errorResponse: ErrorResponse = { error: 'Method not allowed' };
    res.status(405).json(errorResponse);
  }
}