import { GroupData } from '../types/groupdata'
const fs = require('fs')


export async function GetGroup(id: string): Promise<GroupData> {
    let file = "../data/group/" + id + ".json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const groupData: GroupData = (result) as GroupData
    return groupData
}

export async function GetGroups(): Promise<GroupData[]> {
    let file = "../data/summary/groups_all.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const groupList: GroupData[] = (result.groups) as GroupData[]
    return groupList
}
