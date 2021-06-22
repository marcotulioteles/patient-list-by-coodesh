import {
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableBodyProps,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  IconButton} from '@chakra-ui/react'
import { useContext } from 'react'

import { FaFilter } from 'react-icons/fa'
import { PatientsContext } from '../../contexts/PatientsContext'

interface PatientTable {
  rowsPatientTable: TableBodyProps
}

export function PatientTable({ rowsPatientTable }: PatientTable) {
  const { setFilteredGender } = useContext(PatientsContext)

  return (
    <Flex
      width="1120px"
      height="auto"
      borderRadius="10px"
      border="1px solid"
      borderColor="teal.500"
      marginTop="50px"
      justifyContent="center"
      position="relative"
    >
      <Flex
        position="absolute"
        bgColor="teal.200"
        width="100%"
        height="64px"
        borderRadius="10px 10px 0 0"
        zIndex="-1"
      />
      <Table
        width="100%"
        height="95%"
        variant="unstyled"
        bgColor="none"
        borderRadius="0 0 10px 10px"
      >
        <Thead>
          <Tr>
            <Th textAlign="center" height="56px" fontSize="1.05rem">Full Name</Th>
            <Th
              textAlign="center"
              height="56px"
              fontSize="1.05rem"
            >
              <Flex
                justifyContent="space-between"
                align="center"
              >
                Gender
                <Menu>
                  <MenuButton as={IconButton} icon={<FaFilter/>} variant="solid" colorScheme="teal"/>
                  <MenuList width="25px" display="flex" flexDirection="column" align="center">
                    <MenuItem justifyContent="space-between">
                      <Button colorScheme="teal" onClick={() => {setFilteredGender("")}}>All</Button>
                    </MenuItem>
                    <MenuItem justifyContent="space-between">
                      <Button colorScheme="teal" onClick={() => {setFilteredGender("male")}}>Male</Button>
                    </MenuItem>
                    <MenuItem justifyContent="space-between">
                      <Button colorScheme="teal" onClick={() => {setFilteredGender("female")}}>Female</Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Th>
            <Th textAlign="center" height="56px" fontSize="1.05rem">Birth Date</Th>
            <Th textAlign="center" height="56px" fontSize="1.05rem">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rowsPatientTable}
        </Tbody>
      </Table>
    </Flex>
  )
}