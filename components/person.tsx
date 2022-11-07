import { PersonSummaryData } from '../types/personsummarydata'
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Person({ id, _label, name, born, died, total_exhibitions, nationality }: PersonSummaryData) {

  let idx = "../../person/"
  const arr = id.match(/[0-9]+$/);
  if (arr !== null) {
    idx += arr[0];
  }

  return (
    <div key={id}>
      <div><h6><Link href={idx}>{_label}</Link></h6></div>
      <Tabs  defaultActiveKey="bio"  transition={true} >
        <Tab eventKey="bio" title="Biographical Data">
          <ul>
            <li>Name: {name}</li>
            <li>Biographical statement:</li>
            <li>Born: {born}</li>
            <li>Died: {died}</li>
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
        </Tab>
      </Tabs>
    </div>
  )
}