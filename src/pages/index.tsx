import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (

    <Flex w="vw" h="100vh" align="center" justify="center">

      <Flex as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column" >

        <Text align="center" mb={2} letterSpacing="tight" fontWeight="bold" >LOGIN-JB</Text>

        <Stack>
          <Input name='email' type={"email"} label="E-mail" placeholder='E-mail' />
          <Input name='password' type={"password"} label="Password" placeholder='Password'/>
        </Stack>

        <Button type='submit' mt="6" size="lg" colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  )
} 
