import { SetStateAction } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

type DateBirthData = {
  date: string;
  age: number;
}

type IDTypeData = {
  name: string;
  value: string;
}

type StreetData = {
  number: number;
  name: string
}

interface LocationData {
  city: string;
  country: string;
  postcode: number;
  state: string;
  street: StreetData
}

type NameData = {
  title: string;
  first: string;
  last: string
}

type PictureData = {
  large: string;
  medium: string;
  thumbnail: string
}

export interface PatientsData {
  cell: string;
  dob: DateBirthData;
  email: string;
  gender: string;
  id: IDTypeData;
  location: LocationData;
  name: NameData;
  nat: string;
  phone: string;
  picture: PictureData
}

interface PatientsProviderProps {
  children: ReactNode
}

interface PatientsContextData {
  patients: PatientsData[];
  isLoading: boolean;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>
  filteredGender: string;
  setFilteredGender: React.Dispatch<SetStateAction<string>>
}

export const PatientsContext = createContext({} as PatientsContextData);

export function PatientsProvider({ children }: PatientsProviderProps) {
  const [patients, setPatients] = useState<PatientsData[]>([])
  // const [fetchedPatients, setFetchedPatients] = useState<PatientsData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(5)
  const [filteredGender, setFilteredGender] = useState<string>("")

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const response = await api.get(`?page=${page}&results=10&seed=abc&exc=coordinates, timezone, login, registered`)
        const data = response.data.results
        const finalArray = [...patients, ...data]
         
        setPatients(finalArray.map(element => JSON.stringify(element)).reduce((unique, item) => {
          return unique.includes(item) ? unique : [...unique, item]
        }, []).map(element => JSON.parse(element)))
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    loadPatients()
    console.log(patients)
  }, [isLoading, page])

  return (
    <PatientsContext.Provider value={{ patients, isLoading, setIsLoading, page, setPage, filteredGender, setFilteredGender }}>
      {children}
    </PatientsContext.Provider>
  )
}