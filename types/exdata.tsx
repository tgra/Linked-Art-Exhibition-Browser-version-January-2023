export interface ExData {
    id: string
    label?: string
    _label?: string
    start?: string
    end?: string
    location?: string
    org?: string
    identified_by?: any[]
    timespan?: any[]
    equivalent? :any[]
    carried_out_by?:any[]
    influenced_by?:any[]
    took_place_at?:any[]
    subject_of?:any[]
  }

  export interface ExDataProps {
    exData: ExData
  }
  
  export interface ExDataListProps {
    exDataList: ExData[]
  }
 



  