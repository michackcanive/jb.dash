
import { Box, Stack } from "@chakra-ui/react";
import { NavSetction } from "./NavSetction";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";

export function Siderbar() {
    return (
        <Box as="aside" w={"64"} mr="8">
            <Stack spacing={"12"} align="flex-start">
                <NavSetction title="GERAL">
                    <NavLink nameLink="Dashboard" iconLink={RiDashboardLine} href="/dashboard"  />
                    <NavLink nameLink="Usuários" iconLink={RiContactsLine} href="/users" />
                </NavSetction>
                <NavSetction title="AUTOMAÇÃO">
                    <NavLink nameLink="Formulários" iconLink={RiInputMethodLine} href="/users/create" />
                    <NavLink nameLink="Conexão" iconLink={RiGitMergeLine} href="/users/create" />
                </NavSetction>

            </Stack>

        </Box>
    )
}