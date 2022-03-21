import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSetction } from "./NavSetction";

export function SiderBarNav(){
    return(
        <Stack spacing={"12"} align="flex-start">
                <NavSetction title="GERAL">
                    <NavLink nameLink="Dashboard" iconLink={RiDashboardLine} href="/dashboard"  />
                    <NavLink nameLink="Usuários" iconLink={RiContactsLine} href="/users" />
                </NavSetction>
                <NavSetction title="AUTOMAÇÃO">
                    <NavLink nameLink="Formulários" iconLink={RiInputMethodLine} href="/formulrario" />
                    <NavLink nameLink="Conexão" iconLink={RiGitMergeLine} href="/lkl" />
                </NavSetction>

            </Stack>
    )
}