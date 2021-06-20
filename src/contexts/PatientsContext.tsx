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

type PatientsDataProps = {
  results: PatientsData[]
}

interface PatientsProviderProps {
  children: ReactNode
}

interface PatientsContextData {
  patients: PatientsDataProps;
  isLoading: boolean;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
}

export const PatientsContext = createContext({} as PatientsContextData);

export function PatientsProvider({ children }: PatientsProviderProps) {
  const [patients, setPatients] = useState<PatientsDataProps>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const response = await api.get("?page=5&results=50&seed=abc&exc=coordinates, timezone, login, registered")
        const data = response.data
        setPatients(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    loadPatients()
  }, [isLoading])

  return (
    <PatientsContext.Provider value={{ patients, isLoading, setIsLoading }}>
      {children}
    </PatientsContext.Provider>
  )
}