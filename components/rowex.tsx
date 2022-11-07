import { ExSummaryData } from '../types/exsummarydata'
import Link from 'next/link';
import Table from 'react-bootstrap/Table';

export default function Ex({ id, _label, start }: ExSummaryData) {

    let idx = "../../exhibition/"
    idx = idx + id.split("/").pop()


    return (
       
            <tr key={id}>
                <td><Link href={idx}>{_label}</Link></td>
                    <td className="date">  {new Date(start).toDateString()}</td>
                </tr>
     
                )
}