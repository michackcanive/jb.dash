import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Siderbar } from "../../components/SiderBar";

export default function CreateUer() {
    return (
        <Box>
            <Header />
            <Flex
                w={"100%"}
                my="6" maxWidth={1480} mx="auto" px={"6"}>
                <Siderbar />
                <Box flex={"1"} borderRadius={8} bg="gray.800" p={"8"}>
                    <Heading size={"lg"} fontWeight="normal">Criar usuário</Heading>
                    <Divider my={"6"} borderColor="gray.700" />
                    <VStack>
                        <SimpleGrid minChildWidth={"240px"} spacing="8" w="100%">
                            <Input name="name" label="Nome completo" type={"text"} />
                            <Input name="email" label="Seu E-mail" type={"email"} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth={"240px"} spacing="8" w="100%">
                            <Input name="password" label="Senha" type={"password"} />
                            <Input name="password_confirmation" label="Confirmação da senha" type={"password"} />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt={"8"} justify="flex-end">
                         <HStack spacing={"4"}>
                             <Link href={"/users"} passHref>
                            <Button as ="a" colorScheme={"whiteAlpha"}>Cancelar</Button>
                            </Link>
                            <Button colorScheme={"pink"}>Salvar</Button>
                         </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )

}