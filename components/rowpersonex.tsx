import { PersonSummaryDataEx } from '../types/personsummarydataex'
import Link from 'next/link';

export default function PersonEx({ id, _label,  born, died, total_exhibitions }: PersonSummaryDataEx) {
    
    let idx = "/person/" + id.split("/").pop();

    return (
        <tr key={id}>
            <td><Link href={idx}>{_label}</Link></td>
            <td>{new Date(born).toDateString()}</td>
            <td>{new Date(died).toDateString()}</td>
            <td>{total_exhibitions}</td>
        </tr>



    )
}