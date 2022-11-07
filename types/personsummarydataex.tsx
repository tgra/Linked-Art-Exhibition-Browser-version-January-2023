
export interface PersonSummaryDataEx {
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
    exhibitions?:any[]
  }
  
export interface PersonSummaryDataExProps {
    personSummaryDataEx: PersonSummaryDataEx
  }

export interface PersonSummaryDataExListProps {
    personSummaryDataExList: PersonSummaryDataEx[]
  }