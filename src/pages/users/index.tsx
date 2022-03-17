import { Box, Button, Flex, Tr, Td, Text, Heading, Icon, Table, Thead, Checkbox, Th, Tbody, Divider } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Siderbar } from "../../components/Siderbar";

export default function UserList() {
    return (

        <Box>
            <Header />
            <Flex
                w={"100%"}
                my="6" maxWidth={1480} mx="auto" px={"6"}>
                <Siderbar />
                <Box flex={"1"} borderRadius={8} bg="gray.800" p={"8"}>
                    <Flex mb={"8"} justify="space-between" align={"center"} >
                        <Heading size={"lg"} fontWeight="normal" >Usuários</Heading>
                        <Button as="a" href="/users/create" size={"sm"} fontSize="sm" colorScheme={"pink"} leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                            Criar novo
                        </Button>
                    </Flex>
                    <Divider my={"6"} borderColor="gray.700" />
                    <Table colorScheme={"whiteAlpha"}>
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width={"8"}>
                                    <Checkbox color={"pink"} />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width={"8"}>Acção</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme={"pink"} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"sold"}>Michack Canive</Text>
                                        <Text fontSize={"sm"} color="gray.300">michackcanive@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>27 de Abril, 2022</Td>
                                <Td>
                                    <Button as="a" size={"sm"} fontSize="sm" colorScheme={"purple"} leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme={"pink"} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"sold"}>Michack Canive</Text>
                                        <Text fontSize={"sm"} color="gray.300">michackcanive@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>27 de Abril, 2022</Td>
                                <Td>
                                    <Button as="a" size={"sm"} fontSize="sm" colorScheme={"purple"} leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme={"pink"} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"sold"}>Michack Canive</Text>
                                        <Text fontSize={"sm"} color="gray.300">michackcanive@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>27 de Abril, 2022</Td>
                                <Td>
                                    <Button as="a" size={"sm"} fontSize="sm" colorScheme={"purple"} leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme={"pink"} />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight={"sold"}>Michack Canive</Text>
                                        <Text fontSize={"sm"} color="gray.300">michackcanive@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>27 de Abril, 2022</Td>
                                <Td>
                                    <Button as="a" size={"sm"} fontSize="sm" colorScheme={"purple"} leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )

}