import { ExData } from '../types/exdata'
import { ExSummaryData } from '../types/exsummarydata'
const fs = require('fs')


export async function GetEx(id: number): Promise<ExData> {
    let file = "../data/activity/" + id + ".json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exData: ExData = (result) as ExData
    return exData
}

export async function GetExs(): Promise<ExData[]> {
    let file = "../data/summary/events_all.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exList: ExData[] = (result.events) as ExData[]
    return exList
}


export async function GetExsTitleAsc(): Promise<ExSummaryData[]> {
    let file = "../data/summary/events_title_asc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exList: ExSummaryData[] = (result.events) as ExSummaryData[]
    return exList
}

export async function GetExsTitleDsc(): Promise<ExSummaryData[]> {
    let file = "../data/summary/events_title_dsc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exList: ExSummaryData[] = (result.events) as ExSummaryData[]
    return exList
}



export async function GetExsStartAsc(): Promise<ExSummaryData[]> {
    let file = "../data/summary/events_start_asc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exList: ExSummaryData[] = (result.events) as ExSummaryData[]
    return exList
}


export async function GetExsStartDsc(): Promise<ExSummaryData[]> {
    let file = "../data/summary/events_start_dsc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exList: ExSummaryData[] = (result.events) as ExSummaryData[]
    return exList
}



export async function GetExsNonMomaStartAsc(): Promise<ExSummaryData[]> {
    let file = "../data/summary/events_nonmoma_start_asc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exList: ExSummaryData[] = (result.events) as ExSummaryData[]
    return exList
}

export async function GetExsNonMomaStartDsc(): Promise<ExSummaryData[]> {
    let file = "../data/summary/events_nonmoma_start_dsc.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const exList: ExSummaryData[] = (result.events) as ExSummaryData[]
    return exList
}