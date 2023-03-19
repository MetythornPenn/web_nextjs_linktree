// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }


import type { NextApiRequest, NextApiResponse } from 'next'

// create data model
type Data = {
    result: number;
}



// create a function that takes two numbers and returns their sum
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    
    // get the two numbers from the request body
    
    // assign a = 1, b = 2
    const a = 1;
    const b = 2;

    

    // add the numbers
    const result = a + b;

    // return the result
    res.status(200).json({ result });
}

