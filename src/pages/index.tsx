import { Button, Flex, Icon, Input, Text, useDisclosure } from '@chakra-ui/react';
import { ChangeEvent, useContext, useState, useEffect } from 'react';

import { Header } from '../components/Header/Header'
import { Loading } from '../components/Loading';
import { PatientTable } from '../components/Table/PatientTable';
import { ModalPatient } from '../components/Modal/Modal';
import { PatientsContext } from '../contexts/PatientsContext';
import { PatientTableRows } from '../components/Table/PatientTableRows';

import useDebounce from '../hooks/useDebounce';

import { IoReloadOutline } from 'react-icons/io5'
import { RiUserSearchFill } from 'react-icons/ri'
import { TiDocumentText } from 'react-icons/ti'

export default function Home() {
  const [searchedValue, setSearchedValue] = useState<string>("")
  const [isSearching, setIsSearching] = useState(false)
  const [filteredGender, setFilteredGender] = useState<string>("")

  const { patients, isLoading } = useContext(PatientsContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const debouncedValue = useDebounce<string>(searchedValue, 1000)

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(event.target.value)
  }

  const handleSeeMoreButton = (index: number) => {
    localStorage.setItem('@Coodeshchallenge:patientIndex', index.toString())
  }

  const loadingOnChangeInput = () => {
    setIsSearching(true)
  }

  useEffect(() => {
    setIsSearching(false)
  }, [debouncedValue])

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <>
      <ModalPatient
        isOpen={isOpen}
        onClose={onClose}
        address={`
          ${patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].location.street.number}, 
          ${patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].location.street.name} 
          ${patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].location.city}, 
          ${patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].location.state}, 
          ${patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].location.country}
        `}
        dob={patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].dob.date}
        email={patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].email}
        gender={patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].gender}
        name={`${patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].name.first} ${patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].name.last}`}
        ID={patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].id?.value}
        nat={patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].nat}
        phone={patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].phone}
        picture={patients.results[Number(localStorage.getItem('@Coodeshchallenge:patientIndex'))].picture.large}
      />
      <Header />
      <Flex
        as="main"
        width="100vw"
        height="auto"
        minHeight="100vh"
        justifyContent="center"
        marginTop="80px"
      >
        <Flex
          width="1120px"
          height="auto"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text marginTop="64px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, dolor
            id? Quod, quo! Maxime blanditiis aspernatur quisquam, alias beatae ipsam
            nesciunt sapiente porro tempora odit facere cum magni facilis quas.
          </Text>
          <Flex
            as="label"
            bgColor="white"
            alignItems="center"
            width="100%"
            height="48px"
            marginTop="36px"
            borderRadius="24px"
            border="1px solid"
            borderColor="teal.500"
          >
            <Input
              flex="1"
              textAlign="center"
              placeholder="Searching"
              type="search"
              height="100%"
              variant="unstyled"
              marginLeft="16px"
              onChange={(event) => {
                handleSearchInput(event);
                loadingOnChangeInput();
              }}
            />
            <Icon as={RiUserSearchFill} width="25px" height="25px" marginRight="16px" color="gray.500" />
          </Flex>
          {isSearching ? <>
            <Loading />
          </> : (filteredGender == "") ? <>
            <PatientTable
              handleGenderFilter={() => {setFilteredGender("male")}}
              rowsPatientTable={
                <>
                  {patients.results.filter(patient => {
                    if (debouncedValue == "") {
                      return patient
                    } else if ((`${patient.name.first} ${patient.name.last}`).toLowerCase().includes(debouncedValue.toLowerCase())) {
                      return patient
                    } else if (patient.nat.toLowerCase().includes(debouncedValue.toLowerCase())) {
                      return patient
                    }
                  }).map(patient => (
                    <PatientTableRows
                      key={patients.results.indexOf(patient) + 1}
                      name={`${patient.name.first} ${patient.name.last}`}
                      dob={patient.dob.date}
                      gender={patient.gender}
                      children={
                        <Button
                          leftIcon={<TiDocumentText size={18}/>}
                          fontSize="0.875rem"
                          variant="solid"
                          colorScheme="teal"
                          onClick={() => {
                            handleSeeMoreButton(patients.results.indexOf(patient));
                            onOpen()
                          }}
                        >
                          more info
                        </Button>
                      }
                    />
                  ))}
                </>
              }
            />
          </> : <>
          <PatientTable
              handleGenderFilter={() => {setFilteredGender("male")}}
              rowsPatientTable={
                <>
                  {patients.results.filter(patient => {
                    if (filteredGender == "") {
                      return patient
                    } else if (patient.gender.toLowerCase() === filteredGender) {
                      return patient
                    }
                  }).map(patient => (
                    <PatientTableRows
                      key={patients.results.indexOf(patient) + 1}
                      name={`${patient.name.first} ${patient.name.last}`}
                      dob={patient.dob.date}
                      gender={patient.gender}
                      children={
                        <Button
                          leftIcon={<TiDocumentText size={18}/>}
                          fontSize="0.875rem"
                          variant="solid"
                          colorScheme="teal"
                          onClick={() => {
                            handleSeeMoreButton(patients.results.indexOf(patient));
                            onOpen()
                          }}
                        >
                          more info
                        </Button>
                      }
                    />
                  ))}
                </>
              }
            />
          </> }
          <Button
            marginY="50px"
            leftIcon={<IoReloadOutline width="36px" height="36px" />}
            colorScheme="teal"
          >
            Loading more...
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
