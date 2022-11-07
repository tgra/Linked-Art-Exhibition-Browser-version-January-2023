export interface PersonData {
  
    id: string
    _label: string
    name: string
    born?: any
    died?: any
    nationality?: string
    identified_by?: any[]
    referred_to_by?: any[]
    equivalent? :any[]
    assigned_by?:any[],
    total_exhibitions?:number,
    exhibitions?:any[],
    classified_as?:any[]
  }

  export interface PersonDataProps {
    personData: PersonData,
    exList: any[]
  }
  
  export interface PersonDataListProps {
    personDataList: PersonData[]
  }
 



  