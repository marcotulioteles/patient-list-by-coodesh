import { Flex, Icon, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, UseDisclosureProps, Text } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBaby, FaPhoneAlt } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { ImLocation } from 'react-icons/im'
import React from 'react'

interface ModalPatientProps extends UseDisclosureProps {
  picture: string;
  name: string;
  email: string;
  gender: string;
  dob: string;
  phone: string;
  nat: string;
  address: string;
  ID?: string
}

export function ModalPatient({ address, dob, email, gender, name, nat, phone, picture, ID, isOpen, onClose }: ModalPatientProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent position="relative">
          <ModalCloseButton />
          <ModalBody>
            <Image
              position="absolute"
              top="0"
              marginTop="-50px"
              left="50%"
              marginLeft="-50px"
              src={picture}
              width="100px"
              borderRadius="50px"
              objectFit="cover"
            />
            <Text
              marginTop="50px"
              textAlign="center"
              fontWeight="semibold"
              color="gray.600"
            >
              <span style={{ fontWeight: "normal" }}>
                ID:&nbsp;
              </span>{ID}
            </Text>
            <Text
              fontSize="1.25rem"
              fontWeight="semibold"
              marginTop="5px"
              textAlign="center"
              color="teal.500"
            >
              {name}
            </Text>
            <Text fontSize="0.75rem" marginTop="5px" textAlign="center">{email}</Text>
            <Flex fontSize="0.9rem" marginTop="35px" justifyContent="center">
              <Flex align="center">
                <BsFillPersonFill  size={18} style={{ color: "#2C7A7B"}}/>
                <Text marginLeft="5px">{gender}</Text>
              </Flex>
              <Flex align="center" marginLeft="10px">
                <FaBaby size={18} style={{ color: "#2C7A7B"}}/>
                <Text marginLeft="5px">{dob}</Text>
              </Flex>
            </Flex>
            <Flex marginTop="10px" align="center" justifyContent="center" marginLeft="10px" fontSize="0.9rem">
              <FaPhoneAlt size={16} style={{ color: "#2C7A7B"}}/>
              <Text marginLeft="5px">{phone}</Text>
            </Flex>
            <Flex marginTop="10px" align="center" justifyContent="center" marginLeft="10px" fontSize="0.9rem">
              <BiWorld size={18} style={{ color: "#2C7A7B"}}/>
              <Text marginLeft="5px">{nat}</Text>
            </Flex>
            <Flex marginTop="10px" marginBottom="25px" alignItems="center" justifyContent="center" marginLeft="10px" fontSize="0.9rem">
              <ImLocation size={18} style={{ color: "#2C7A7B"}}/>
              <Text marginLeft="5px">{address}</Text>
            </Flex>            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}