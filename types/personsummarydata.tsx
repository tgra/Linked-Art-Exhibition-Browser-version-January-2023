export interface PersonSummaryData {
    id: string
    _label: string
    label?: string
    name: string
    born?: any
    died?: any
    nationality?: string
    identified_by?: any[]
    referred_to_by?: any[]
    equivalent? :any[]
    total_exhibitions?:number
   
  }
  
export interface PersonSummaryDataProps {
    personSummaryData: PersonSummaryData
  }

export interface PersonSummaryDataListProps {
    personSummaryDataList: PersonSummaryData[]
  }