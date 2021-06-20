import { Flex, Spinner, Text } from '@chakra-ui/react'

export function Loading() {
  return(
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">
    <Flex alignItems="center">
    <Spinner 
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="teal.400"
      size="xl"
    />
    <Text fontSize="1.25rem" marginLeft="15px">Loading...</Text>
    </Flex>
  </Flex>
  )
}