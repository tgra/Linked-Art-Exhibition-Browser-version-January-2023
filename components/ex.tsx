import { ExSummaryData } from '../types/exsummarydata'
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Ex({ id, _label, start, end}:ExSummaryData) {

  let idx = "../../exhibition/"
  idx = idx + id.split("/").pop()
  

  return (
    <div key={id}>
      <div><h6><Link href={idx}>{_label}</Link></h6></div>
      <Tabs  defaultActiveKey="date"  transition={true} >
      <Tab eventKey="date" title="Date">
        <ul>
        <li>Start: {new Date(start).toDateString()}</li>
         <li>End: {new Date(end).toDateString()}</li>

        </ul>
         
        </Tab>
        <Tab eventKey="identifiers" title="Identifiers">
          <ul>
            <li>Identifier: <Link href={idx}>{id}</Link></li>
          </ul>
        </Tab>
       
      </Tabs>
      <br/>
    </div>
  )
}