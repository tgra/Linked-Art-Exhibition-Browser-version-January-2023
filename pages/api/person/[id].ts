import type { NextApiRequest, NextApiResponse } from 'next'

var fs = require('fs');

export default function eventHandler(req: NextApiRequest, res: NextApiResponse) {
    const { query: { id }, } = req

    let file = "../data/person/" + id + ".json"
    
    let rawdata = fs.readFileSync(file);
    let person = JSON.parse(rawdata);
    res.status(200).json(person);
}   