export interface GroupSummaryData {
    id: string
    _label: string
    identified_by?: any[]
    total_exhibitions?:number
  }
  
export interface GroupSummaryDataProps {
    groupSummaryData: GroupSummaryData
  }

export interface GroupSummaryDataListProps {
    groupSummaryDataList: GroupSummaryData[]
  }