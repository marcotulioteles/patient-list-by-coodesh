import {
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
  IconButton,
  Switch
} from '@chakra-ui/react'

import { FaFilter } from 'react-icons/fa'

interface PatientTable {
  rowsPatientTable: TableBodyProps
  handleGenderFilter: () => void;
}

export function PatientTable({ rowsPatientTable, handleGenderFilter }: PatientTable) {
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
                  <MenuList width="25px">
                    <MenuItem justifyContent="space-between">
                      All
                      <Switch size="md" defaultIsChecked/>
                    </MenuItem>
                    <MenuItem justifyContent="space-between">
                      Male
                      <Switch size="md"/>
                    </MenuItem>
                    <MenuItem justifyContent="space-between">
                      Female
                      <Switch size="md"/>
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