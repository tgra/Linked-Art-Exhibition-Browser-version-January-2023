import { PersonData } from '../types/persondata'
import { PersonSummaryData } from '../types/personsummarydata'
const fs = require('fs')


export async function GetPerson(id: string): Promise<PersonData> {
   
    let file = "../data/person/" + id + ".json"

    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const personData: PersonData = (result) as PersonData
    return personData
}

export async function GetPersons(): Promise<PersonData[]> {
    let file = "../data/summary/persons_all.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const personList: PersonData[] = (result.persons) as PersonData[]
    return personList
}

export async function GetPersonsTotalExDsc(): Promise<PersonSummaryData[]> {
    let file = "../data/summary/persons_total_exhibitions_desc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const personList: PersonSummaryData[] = (result.persons) as PersonSummaryData[]
    return personList
}


export async function GetPersonsBornAsc(): Promise<PersonSummaryData[]> {
    let file = "../data/summary/persons_born_asc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const personList: PersonSummaryData[] = (result.persons) as PersonSummaryData[]
    return personList
}

export async function GetPersonsBornDsc(): Promise<PersonSummaryData[]> {
    
    let file = "../data/summary/persons_born_desc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    
    const personList: PersonSummaryData[] = (result.persons) as PersonSummaryData[]

    return personList
}



export async function GetPersonsDiedAsc(): Promise<PersonSummaryData[]> {
    let file = "../data/summary/persons_died_asc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const personList: PersonSummaryData[] = (result.persons) as PersonSummaryData[]
    return personList
}

export async function GetPersonsDiedDsc(): Promise<PersonSummaryData[]> {
    let file = "../data/summary/persons_died_desc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const personList: PersonSummaryData[] = (result.persons) as PersonSummaryData[]
    return personList
}


export async function GetPersonsNameDsc(): Promise<PersonSummaryData[]> {
    let file = "../data/summary/persons_name_desc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const personList: PersonSummaryData[] = (result.persons) as PersonSummaryData[]
    return personList
}