import { Avatar, Flex, Icon, Text } from '@chakra-ui/react'
import { CgPill } from 'react-icons/cg'

export function Header() {
  return (
    <Flex
      as="header"
      width="100vw"
      height="80px"
      bgColor="teal.400"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      zIndex="999"
    >
      <Flex
        width="1120px"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex height="100%" alignItems="center">
          <Icon as={CgPill} width="50px" height="50px" color="white" />
          <Text
            color="white"
            fontSize="2rem"
            fontWeight="600"
            marginLeft="10px"
          >
            Pharma Inc
          </Text>
        </Flex>
        <Avatar />
      </Flex>
    </Flex>
  )
}