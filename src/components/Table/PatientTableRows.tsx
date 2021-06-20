import { Tr, Td, TableRowProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PatientTableRowsProps extends TableRowProps {
  name: string;
  gender: string;
  dob: string;
  children: ReactNode
}

export function PatientTableRows({
  name,
  gender,
  dob,
  children
}: PatientTableRowsProps) {
  return (
    <Tr _hover={{ backgroundColor: "gray.100" }}>
      <Td textAlign="center" width="auto">{name}</Td>
      <Td textAlign="center" width="auto">{gender}</Td>
      <Td textAlign="center" width="auto">{dob}</Td>
      <Td textAlign="center" width="auto">
        {children}
      </Td>
    </Tr>
  )
}