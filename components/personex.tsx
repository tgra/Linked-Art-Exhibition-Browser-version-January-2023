import { PersonSummaryDataEx } from '../types/personsummarydataex'
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function PersonEx({ id, _label, name, born, died, total_exhibitions, nationality, exhibitions }: PersonSummaryDataEx) {
    let idx = "../../person/"
    const arr = id.match(/[0-9]+$/);
    if (arr !== null) {
        idx += arr[0];
    }
    // sort exhibitions by start date
    let exhibitions_sorted = exhibitions.sort(function (a, b) {
        return new Date(b.start).getTime() - new Date(a.start).getTime();
    });

    return (
        <div key={id}>
        
        <div><h6><Link href={idx}>{_label}</Link></h6></div>
        
        <Tabs
                    defaultActiveKey="bio"
                    transition={true}
                   
                     >
                    <Tab eventKey="bio" title="Biographical Data" >
                        <ul>
                            <li>Name: {name}</li>
                            <li>Biographical statement:</li>
                            <li>Born: {new Date(born).toDateString()}</li>
                            <li>Died: {new Date(died).toDateString()}</li>
                            <li>Nationality: {nationality}</li>
                        </ul>
                    </Tab>
                    <Tab eventKey="identifiers" title="Identifiers">
                        <ul>
                            <li>Identifier: <Link href={id}>{id}</Link></li>
                        </ul>
                    </Tab>

                    <Tab eventKey="ex" title="Exhibitions">
                        <ul>
                            <li>Total exhibitions featured in (in dataset): {total_exhibitions}</li>
                        </ul>

                        <ul>
                            {exhibitions_sorted.map((ex: any) => (

                                <li key={ex.id}> {new Date(ex.start).getFullYear()}   <Link href={'../../exhibition/' + ex.id.match(/[0-9]+$/)[0]}>{ex._label}</Link>  </li>
                            ))}

                        </ul>
                    </Tab>



                </Tabs>

</div>



    )
}