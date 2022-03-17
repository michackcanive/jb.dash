import { Box, Stack ,Text,Link, Icon} from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";


export function Siderbar() {
    return (
        <Box as="aside" w={"64"} mr="8">
            <Stack spacing={"12"} align="flex-start">
                <Box>
                    <Text  fontWeight={"bold"} color="gray.400" fontSize={"small"} >
                        GERAL
                    </Text>
                    <Stack spacing={"4"} mt="8" align={"stretch"}>
                        <Link display={"flex"} href="/dashboard" >
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight={"medium"}>Dashboard</Text>
                        </Link>
                        <Link display={"flex"} href="/users" >
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight={"medium"}>Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
             
                <Box>
                    <Text  fontWeight={"bold"} color="gray.400" fontSize={"small"} >
                        AUTOMAÇÃO
                    </Text>
                    <Stack spacing={"4"} mt="8" align={"stretch"}>
                        <Link display={"flex"} href="/" >
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight={"medium"}>Formulários</Text>
                        </Link>
                        <Link display={"flex"} href="/" >
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight={"medium"}>Conexão</Text>
                        </Link>
                        <Link display={"flex"} href="/" >
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight={"medium"}>Marketing</Text>
                        </Link>
                        <Link display={"flex"} href="/" >
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight={"medium"}>Merge</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>

        </Box>
    )
}